 import React from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
 import classes from './Button.css';

const Button = (props)=>(
    <button className={[classes.Button,classes[props.btnType]].join(' ')}
     onClick={props.clicked}
    disabled= {props.disabled}
    >{props.children}
    </button>
);
     

export default Button;