 import React from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
 import classes from './NavigationItems.css';
 import NavigationItem from './NavigationItem/NavigationItem';


const NavigationItems = (props)=>(
<ul className={classes.NavigationItems}>
    <NavigationItem  link="/" exact > Burger Builder</NavigationItem>
    <NavigationItem link="/orders"> Orders </NavigationItem>
</ul>
);
export default NavigationItems;