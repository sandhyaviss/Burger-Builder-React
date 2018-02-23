import React from 'react';
import classes from './ToolBar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from '../../Navigation/SideDrawer/Menu/Menu';
import SideDrawer from '../SideDrawer/SideDrawer';

const toolBar = (props)=>(
<header className={classes.ToolBar}> 
    <div> <Menu  click={props.sideDrawerOpen} /></div>
    <SideDrawer />
        <div className={classes.Logo}>
    <Logo height="80%" />
    </div> 
    <nav className={classes.DesktopOnly} >
     <NavigationItems /> 
    </nav>   
</header>
);
export default toolBar;