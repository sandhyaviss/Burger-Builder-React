 import React from 'react';
 import Logo from '../../Logo/Logo';
 import NavigationItems from '../NavigationItems/NavigationItems';
 import classes from './SideDrawer.css';
 import Backdrop from '../../UI/Backdrop/Backdrop';
 import Auxy from '../../../hoc/Auxy/Auxy';
 
const SideDrawer = (props)=>{

    const cssStyle= {
    transform:"translateX(0)" 
   };
     if(!props.open)
      {
        cssStyle.transform="translateX(-100%)"
      }
  return(
    <Auxy>
         <Backdrop show={props.open} close={props.close}/>
         <div className={classes.SideDrawer} style={cssStyle}>
                       <div style={{height: '11%'}}>
            <Logo />
              </div>
        <nav>
           <NavigationItems />
        </nav> 
        </div>
    </Auxy>
);
    
}
export default SideDrawer;