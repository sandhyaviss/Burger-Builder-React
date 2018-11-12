 import React from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
 import Auxy from '../../../hoc/Auxy/Auxy';
 import Button from '../../UI/Button/Button';
 import classes from '../../UI/Button/Button.css';

const OrderSummery = (props)=>{
    const ingredients=Object.keys(props.order).map((keys)=>{
        return <li key={keys}><span style={{    textTransform: 'capitalize'}}>{keys}:</span> {props.order[keys]} </li>
      });
 return(
     <Auxy>
         <h3>Order Details</h3>
         <p>A delicious burger with the following toppings</p>
         <ul>
             {ingredients}
         </ul>
         <p> <strong>Total Price: {props.price}</strong></p>
         <p>Continue to checkout ?</p>
         <Button btnType="Danger" clicked={props.cancel}>CANCEL </Button>
         <Button btnType="Success" clicked={props.continue}> CONTINUE </Button>
     </Auxy>

 );
 
};
export default OrderSummery;