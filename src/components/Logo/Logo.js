 import React from 'react';
 import logoPng from '../../../src/assets/images/burger-logo.png';
 import classes from './Logo.css';

const Logo = (props)=>(
<div className= {classes.Logo}>
     <img src={logoPng} alt="Burger-logo"></img>
</div>
);

export default Logo;