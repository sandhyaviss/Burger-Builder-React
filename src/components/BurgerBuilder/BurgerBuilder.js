import React, { Component} from 'react';
import {connect}  from 'react-redux';
import Auxy from '../../hoc/Auxy/Auxy';
import Burger from '../Burger/Burger';
import BuildControls from '../Burger/BuildControls/BuildControls';
import Modal from '../UI/Modal/Modal';
import OrderSummery from '../Burger/OrderSummey/OrderSummery';
import Backdrop from '../UI/Backdrop/Backdrop';
import Spinner from '../UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Checkout from '../../conatiner/Checkout/Checkout';
import axios from '../../axios-order';
import {Route,NavLink} from 'react-router-dom';
import * as burgerBuilderActions from '../../store/action/index'; 

class BurgerBuilder extends Component{
    state = 
    {   purschasing:false,
         }

    componentDidMount(){
        this.props.onInitIngredients();
        console.log("called on init");
        console.log(this.props);
    }
  updatePurchasable=(ingredients)=>{
                const sum=Object.keys(ingredients).map((keys)=>{
           return ingredients[keys] ;
          }).reduce((sum,el)=>{
              return sum+el;
          },0);
        return sum > 0;
            }

       purschaseHandler = () =>{
           this.setState({ purschasing:true });
                  } 

       purschaseContinueHandler = () =>{
         this.props.history.push('/checkout');         }

       cancelPurchaseHandler=()=>{
           this.setState({ purschasing:false});
       }
  
 
    render(){
        const disabledInfo= { ...this.props.ings};
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]==0
           }
       console.log("props in burgerBuilder" + this.props.ings);

                        
      let orderSummery= null;
      let burger = this.props.error ? <p> Ingredients can't be found</p>: <Spinner/>;

         if(this.props.ings) {
        burger=(<Auxy>
          <Burger ingredients= {this.props.ings} />
          <BuildControls
                price ={this.props.price}
                ingredientAdded={this.props.addIngredients}
                ingredientRemove={this.props.removeIngredients} 
                purchasable={this.updatePurchasable(this.props.ings)}
                //we want to execute here
                purchasing={this.purschaseHandler}
                disabled={disabledInfo}
                ordered={this.purschaseHandler}
            />
       </Auxy> );
        orderSummery=  <OrderSummery order={ this.props.ings} 
         cancel= {this.cancelPurchaseHandler}
         continue ={this.purschaseContinueHandler}
         price ={this.props.price}
       /> 
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

const mapStateToProps = (state)=>{
    return{
    ings: state.ingredients,
    price:state.totalPrice,
    error:state.error
    }
};
const mapDispatchToProps=(dispatch)=>{
    return{
    addIngredients:(ingName)=>dispatch(burgerBuilderActions.addIngredient(ingName)),
    removeIngredients:(ingName)=>dispatch(burgerBuilderActions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(burgerBuilderActions.initIngredient())
    }
   
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));