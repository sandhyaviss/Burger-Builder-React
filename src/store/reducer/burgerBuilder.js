import React from 'react';
import * as actionTypes from '../action/actionTypes';

const initialState= {
    ingredients :null,
    totalPrice:4,
    error: false
};
const INGREDIENT_PRICES= {
    Cheese : 0.7,
    Salad : 0.8,
    Meat:1.4,
    Bacon:0.7
    }
const reducer =(state=initialState,action)=>{
    console.log("state in reducer"+ state.ingredients);
  switch(action.type){
   case actionTypes.ADD_INGREDIENT:
      return{
             ...state,
             ingredients:{...state.ingredients,
             [action.ingredientName]: state.ingredients[action.ingredientName]+1},
             totalPrice:state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        };

    case actionTypes.REMOVE_INGREDIENT:
        return {
            ...state,
             ingredients: {...state.ingredients,
             [action.ingredientName]: state.ingredients[action.ingredientName]-1 },
             totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
                }
    case actionTypes.SET_INGREDIENT:
    return {
          ...state,
          ingredients:action.ingredients,
          error:false
    };

    case actionTypes.FETCH_INGREDIENT_FAILED:
    return {
        ...state,
        error:true
    }

    default:
     return state;
  }

};
export default reducer;
