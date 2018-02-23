import React,{ Component} from 'react';
import Auxy from '../../hoc/Auxy/Auxy';
import classes from './Layout.css';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

 class  Layout extends Component{
    state={
      open:true,
     }
    OpenSideDrawerHandler =() =>{
        this.setState({ open:false });
    }

    sideDrawerMenuToggle =() =>{
      this.setState((prevState) =>{
          return { open : !prevState.open};
          })
    }

  render(){
         return(
        <Auxy>
      <div> Toolbar, SideDrawer, Backdrop </div>
      <ToolBar  sideDrawerOpen={this.sideDrawerMenuToggle}/>
     <SideDrawer open={this.state.open} close={this.OpenSideDrawerHandler} />
      <main className={classes.Content}>
        {this.props.children}
      </main>
</Auxy>);
      
  }
}


//return is omitted as single expression of arrow function, that is the 
//reason for having paranthesis instead of curly{} braces(no return statement).
export default Layout;