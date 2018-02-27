import React,{Component} from 'react';
import Auxy from '../Auxy/Auxy';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent,axios) =>{
    return class extends Component{
      //class name is not given because just returning class not reusing the class
            state={
                 error:null
            }
            componentWillMount(){
             this.reqInterceptor= axios.interceptors.request.use((req)=>{
                this.setState({ error:null});
                return req;
         });

         this.resInterceptor= axios.interceptors.response.use(res=>res,(error)=>{
             this.setState({ error:error});
             console.log(error);
           });
            }
            componentWillUnmount(){
              console.log('will unmount',this.reqInterceptor,this.resInterceptor);
              axios.interceptors.request.eject(this.reqInterceptor);
              axios.interceptors.response.eject(this.resInterceptor);
            }

             errorConfirmedHandler=()=>{
               this.setState({error:null});
             }
              render(){
                return(
                <Auxy>
                        <Modal show={this.state.error} 
                            modalClosed={this.errorConfirmedHandler}>
                          {this.state.error ? this.state.error.message : null}
                        </Modal>
                    <WrappedComponent {...this.props} />
                  </Auxy>

                );
              }
            }
          }
              export default withErrorHandler;