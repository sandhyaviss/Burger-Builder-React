import React,{ Component} from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import Auxy from '../Auxy/Auxy';
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
     <SideDrawer open={this.state.open} modalClosed={this.OpenSideDrawerHandler} />
      <main className={classes.Content}>
        {this.props.children}
      </main>
</Auxy>);
      
  }
}


//return is omitted as single expression of arrow function, that is the 
//reason for having paranthesis instead of curly{} braces(no return statement).
export default Layout;