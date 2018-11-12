 import React from '../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
 import classes from './NavigationItem.css';
 import {NavLink } from '../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-router-dom';

const NavigationItem = (props)=>(
    <li className={classes.NavigationItem}> 
    <NavLink to={props.link}
    exact = {props.exact}
    activeClassName={classes.active}
          > {props.children}</NavLink></li>
);
export default NavigationItem;