import React from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import classes from './ToolBar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from '../SideDrawer/Menu/Menu';
import SideDrawer from '../SideDrawer/SideDrawer';

const toolBar = (props)=>(
<header className={classes.ToolBar}> 
    <div> <Menu  click={props.sideDrawerOpen} /></div>
           <div className={classes.Logo}>
    <Logo height="80%" />
    </div> 
    <nav className={classes.DesktopOnly} >
     <NavigationItems /> 
    </nav>   
</header>
);
export default toolBar;