import React,{Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary';
import BurgerBuilder from '../../components/BurgerBuilder/BurgerBuilder';


class Checkout extends Component{
     state={
     ingredients: {   
                  Cheese : 1,
                  Salad : 2,
                   Meat:1,
                   Bacon:0 }
                };

                componentDidMount(){
                    console.log(this.props);
                }
   
    cancelHandler= () =>{
         //instead of Link we can use history push property
        this.props.history.goBack();
    }

    continueHandler=()=>{
        this.props.history.replace('/checkout/contact-data');
    }
    render(){
        return (
        <CheckoutSummary 
        ingredients={this.state.ingredients}
        cancelButton={ this.cancelHandler}
        continueButton ={ this.continueHandler}
        />

        );

    }
}

export default Checkout ;