import React,{Component} from 'react';
import Auxy from '../Auxy/Auxy';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent) =>{
    return (props)=> {
             return( <Auxy>
             
               <WrappedComponent {...props} />
             </Auxy>
              );
     }     }
  
export default withErrorHandler;