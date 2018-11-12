 import React from '../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
 import classes from './BuildControl.css';
const buildControl = (props)=>(
<div className={classes.BuildControl}>
    <div className={classes.Label}>{props.IngredientLabel}</div>
    <button className={classes.Less}onClick={props.remove} disabled={props.disabled}>Less</button>
    <button className={classes.More} onClick={props.added} >More</button>
</div>
);
export default buildControl;