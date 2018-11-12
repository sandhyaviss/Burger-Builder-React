 import React from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
 import classes from './BuildControls.css';
 import BuildControl from './BuildControl/BuildControl';

 const controls =[
     {label: 'Salad', type: 'Salad'},
     {label: 'Bacon', type: 'Bacon'},
     {label: 'Cheese', type: 'Cheese'},
     {label: 'Meat', type: 'Meat'}
     ];

const buildControls = (props)=>(
<div className={classes.BuildControls}>
<p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
  { controls.map(ctrl =>(
      <BuildControl key={ctrl.label} 
      IngredientLabel={ctrl.label} 
      added={()=>props.ingredientAdded(ctrl.type)}
      remove={()=>props.ingredientRemove(ctrl.type)} 
      disabled={props.disabled[ctrl.type]}
       />
  ))}
 
  <button className={classes.OrderButton} 
          disabled= {!props.purchasable} 
          onClick={props.ordered}>ORDER NOW</button>
</div>
);
export default buildControls;