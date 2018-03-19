 import React from 'react';
 import classes from './NavigationItems.css';
 import NavigationItem from './NavigationItem/NavigationItem';


const NavigationItems = (props)=>(
<ul className={classes.NavigationItems}>
    <NavigationItem   > Burger Builder</NavigationItem>
    <NavigationItem > Check Out </NavigationItem>
</ul>
);
export default NavigationItems;