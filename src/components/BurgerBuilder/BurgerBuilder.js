import React, { Component} from 'react';
import Auxy from '../../hoc/Auxy';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
        totalPrice:4
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
}
    render(){
        const disabledInfo= { ...this.state.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0

        }
        console.log(disabledInfo);
        return(
        <Auxy>
            <Burger ingredients= {this.state.ingredients} />
            <p>total Price: {this.state.totalPrice}</p>
            <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemove={this.removeIngredientHandler} 
            disabled={disabledInfo} /> 
        </Auxy>
        );
    }
}

export default BurgerBuilder;