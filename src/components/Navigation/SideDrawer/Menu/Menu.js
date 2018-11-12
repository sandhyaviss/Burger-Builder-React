 import React from '../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
 import Logo from '../../../Logo/Logo';
 import classes from './Menu.css';

const Menu = (props)=>{
return(
    <div >
       <div className={classes.DrawerToggle} onClick={props.click}>
            <div></div>
            <div></div>
            <div></div>
       </div> 
       </div>
);
}
export default Menu;