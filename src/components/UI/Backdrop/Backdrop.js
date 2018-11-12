 import React from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
 import classes from './Backdrop.css';

const Backdrop = (props)=>(
    props.show ?  <div className={classes.Backdrop} onClick={props.clicked}> </div> : null
);

export default Backdrop;