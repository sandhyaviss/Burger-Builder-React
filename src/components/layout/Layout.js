import React from 'react';
import Auxy from '../../hoc/Auxy';
import classes from './Layout.css';

const layout =  (props) =>(
 <Auxy>
    <div> Toolbar, SideDrawer, Backdrop </div>
    <main className={classes.Content}>
        {props.children}
    </main>
</Auxy>);
//return is omitted as single expression of arrow function, that is the 
//reason for having paranthesis instead of curly{} braces(no return statement).
export default layout;