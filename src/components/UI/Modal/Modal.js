 import React,{Component} from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
 import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Auxy from '../../../hoc/Auxy/Auxy';

class  Modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.show != this.props.show || nextProps.children !== this.props.children ){
            return true;
        }
    }

    componentWillMount(){
        console.log("Order summery");
    }
    
     render(){
        console.log(this.props.show+"In modal component show property");
     return(
         <Auxy>
         <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className={classes.Modal}
        style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity:this.props.show ? '1' : '0'
        }}>
         {this.props.children}    
                   </div>
                   </Auxy>         
     );}

}
export default Modal;