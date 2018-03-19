import React, { Component} from 'react';
import Auxy from '../../hoc/Auxy/Auxy';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummery from '../Burger/OrderSummey/OrderSummery';
import Backdrop from '../UI/Backdrop/Backdrop';
import axios from '../../axios-order';
import Spinner from '../UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Checkout from '../../conatiner/Checkout/Checkout';
import {Route,NavLink} from 'react-router-dom';

const INGREDIENT_PRICES= {
    Cheese : 0.7,
    Salad : 0.8,
    Meat:1.4,
    Bacon:0.7
    }

class BurgerBuilder extends Component{
    state = {
        ingredients :null ,
        totalPrice:4,
        purchasable : false,
        purschasing:false,
        loading:false,
        error:false
    }

    componentDidMount(){
        axios.get("https://burger-builder-3d055.firebaseio.com/ingredients.json")
        .then(  response=>
            { this.setState({ingredients: response.data}) }
        ).catch(error=>{
            this.setState({error:true})
        });
        console.log(this.props);
    }
  updatePurchasable=(ingredients)=>{
                const sum=Object.keys(ingredients).map((keys)=>{
           return ingredients[keys] ;
          }).reduce((sum,el)=>{
              return sum+el;
          },0);
         this.setState({purchasable: sum>0});
            }

       purschaseHandler = () =>{
           this.setState({ purschasing:true });
                  } 

       purschaseContinueHandler = () =>{
           //alert("continue shopping");
           this.setState({loading:true});
               const purschanceSummary ={
               ingredients: this.state.ingredients,
               price: this.state.totalPrice,
              customer: {
                   name: "Sam",
                   address:{ street: '1234',
                             city: 'Milwaki',
                            country: 'Canada'
                           } 
                        },
                 modeOfDelivery: 'fastend'       
                      }
                      axios.post("/Orders.json", purschanceSummary)
           .then(response =>{
                    this.setState({loading:false,purschasing:false});
         })
              .catch(error =>{
                    this.setState({ loading:false,purschasing:false})
                           });
             this.props.history.push('/checkout');
                             }

       cancelPurchaseHandler=()=>{
           this.setState({ purschasing:false});
       }
    addIngredientHandler =(type)=>{
      const oldCount=this.state.ingredients[type];
      const updatedCount = oldCount+1;
      const updatedIngredients ={
          ...this.state.ingredients
      };
      updatedIngredients[type]=updatedCount;
      const priceAddition= INGREDIENT_PRICES[type];
      const oldPrice=this.state.totalPrice;
      const newPrice= priceAddition + oldPrice;
      this.setState({ totalPrice: newPrice,ingredients: updatedIngredients});
      this.updatePurchasable(updatedIngredients);
}
  
   removeIngredientHandler= (type) =>{
     const oldRCount = this.state.ingredients[type];
     if(oldRCount<=0){ return;}
     const updatedCount= oldRCount-1;
     const updatedIngredients = {
         ...this.state.ingredients
     };
     const oldPrice = this.state.totalPrice;
     const typePrice=INGREDIENT_PRICES[type];
     const newPrice= oldPrice-typePrice;
     updatedIngredients[type]=updatedCount;
     this.setState({ingredients:updatedIngredients,totalPrice: newPrice});
     this.updatePurchasable(updatedIngredients);
   }

 
    render(){
        const disabledInfo= { ...this.state.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]==0
           }
       

     
      let orderSummery= null;
      let burger = this.state.error ? <p> Ingredients can't be found</p>: <Spinner/>;

         if(this.state.ingredients) {
        burger=(<Auxy>
          <Burger ingredients= {this.state.ingredients} />
          <BuildControls
                price ={this.state.totalPrice}
                 ingredientAdded={this.addIngredientHandler}
                  ingredientRemove={this.removeIngredientHandler} 
                   purchasable={this.state.purchasable}
                 purchasing={this.purschaseHandler}
                disabled={disabledInfo}
                ordered={this.purschaseHandler}
            />
       </Auxy> );
        orderSummery=  <OrderSummery order={ this.state.ingredients} 
         cancel= {this.cancelPurchaseHandler}
         continue ={this.purschaseContinueHandler}
         price ={this.state.totalPrice}
       /> 
         }

         if(this.state.loading){
            orderSummery = <Spinner /> ;
        }
  
          return(
        <Auxy>
            <Backdrop show={this.state.purschasing} modalClosed={this.cancelPurchaseHandler}/>

            <Modal show={this.state.purschasing}  >
           
               {orderSummery}
            </Modal>
             {burger}
             </Auxy>
        );
    }
}

export default withErrorHandler(BurgerBuilder,axios);