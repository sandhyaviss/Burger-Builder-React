import React from 'react';
import classes from '../orders/order.css';

const order =(props)=>(
    <div className={classes.order}>
        <p>Ingredients : {props.ings}</p>
        <p> <strong> Price : USD {props.price.toFixed(2)} </strong> </p>
    </div>
);
 
export default order;