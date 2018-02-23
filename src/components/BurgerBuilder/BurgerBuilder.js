import React, { Component} from 'react';
import Auxy from '../../hoc/Auxy/Auxy';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummery from '../Burger/OrderSummey/OrderSummery';
import Backdrop from '../UI/Backdrop/Backdrop';

const INGREDIENT_PRICES= {
    Cheese : 0.7,
    Salad : 0.8,
    Meat:1.4,
    Bacon:0.7
    }

class BurgerBuilder extends Component{
    state = {
        ingredients : {
               Cheese : 0,
                Salad : 0,
                Meat:0,
                Bacon:0
        },
        totalPrice:4,
        purchasable : false,
        purschasing:false
    }

  updatePurchasable=(ingredients)=>{
                const sum=Object.keys(ingredients).map((keys)=>{
           return ingredients[keys] ;
          }).reduce((sum,el)=>{
              return sum+el;
          },0);
         this.setState({purchasable: sum>0});
         console.log(this.state.purchasable);
       }

       purschaseHandler = () =>{
           this.setState({ purschasing:true });
       } 

       purschaseContinueHandler = () =>{
           alert("continue shopping");
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
        console.log(disabledInfo);
        return(
        <Auxy>
             <Backdrop show={this.state.purschasing} close={this.cancelPurchaseHandler}/>

            <Modal show={this.state.purschasing} >
            <OrderSummery order={ this.state.ingredients} 
              cancel= {this.cancelPurchaseHandler}
              continue ={this.purschaseContinueHandler}
              price ={this.state.totalPrice}
            /> 
            
            </Modal>
             <Burger ingredients= {this.state.ingredients} />
              <BuildControls
            price ={this.state.totalPrice}
            ingredientAdded={this.addIngredientHandler}
            ingredientRemove={this.removeIngredientHandler} 
            purchasable={this.state.purchasable}
            purchasing={this.purschaseHandler}
            disabled={disabledInfo} /> 
             </Auxy>
        );
    }
}

export default BurgerBuilder;