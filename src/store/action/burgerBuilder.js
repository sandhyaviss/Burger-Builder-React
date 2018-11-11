import * as actionTypes from './actionTypes';
import axios from '../../axios-order';

 export const addIngredient=( name)=>{
    return{
        type : actionTypes.ADD_INGREDIENT,
        ingredientName : name
    };
};

export const removeIngredient=( name)=>{
    return{
        type : actionTypes.REMOVE_INGREDIENT,
        ingredientName : name
    };
};

export const setIngredients= (ing) =>{
    return {
        type:actionTypes.SET_INGREDIENT,
        ingredients: ing
    };
};

export const fetchIngFailed=()=>{
    return {
        type: actionTypes.FETCH_INGREDIENT_FAILED
    };
};

export const initIngredient =()=>{
    return dispatch =>{
  //this dispatch action is possible bcoz of thunk, we can execute asynchronous action
  axios.get("https://burger-builder-3d055.firebaseio.com/ingredients.json")
  .then(  response=>
       { dispatch({ingredients: response.data}) 
    console.log("ingredients from fire base"+response.data);}
   ).catch(error=>{
       console.log("in init ingredient action file");
       dispatch(fetchIngFailed());
   });

    };
}