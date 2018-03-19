import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import classes from './CheckoutSummary.css';

const CheckoutSummary = (props) => {
    return (<div className={classes.checkout} >
  <h1> Hope you like this Burger!</h1>
 <div style={{"width":"100%", "margin" : "auto" }}>
  <Burger ingredients={props.ingredients}/>
  
  <Button className={classes.Button} clicked={props.cancelButton} btnType="Danger">Cancel</Button>
  <Button className={classes.Button} btnType="Success" clicked={props.continueButton}>Continue</Button>
  </div> </div>
    );
}

export default CheckoutSummary;