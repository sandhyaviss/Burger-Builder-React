 import React from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
 import classes from './Burger.css';
 import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
 
 const burger = (props) =>{
  let transformedIngredients= Object.keys(props.ingredients).map( igKey => {
      return [...Array(props.ingredients[igKey])].map( (_,i)=>{
           return <BurgerIngredient key ={igKey+i} type={igKey} />;});
     }).reduce((arr,el)=>{ 
       return arr.concat(el)},[]);
     

   if(transformedIngredients.length ===0){
     transformedIngredients= <p>"please start adding ingredients"</p>;
     
   }
   //array of ingredient keys
 

return(
  <div className={classes.Burger}>
   
  <BurgerIngredient type="BreadTop" />
   {transformedIngredients}
   <BurgerIngredient type="BreadBottom" />
  </div>
     );
   };
export default burger;



 