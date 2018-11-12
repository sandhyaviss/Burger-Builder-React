import React,{Component } from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import classes from './Contact-data.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-order';
import  Input from '../../../components/UI/Form/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
import {connect} from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-redux';

class ContactData extends Component{
    state ={
        orderForm:{
     name: {
           elementType: 'input',
           elementConfig: {
               type: 'text',
               placeholder:"enter Name"
           },
           value:'',
           validation: {
               required : true
           },
           valid : false,
           touched:false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type:'email',
                placeholder:"your email"
            },
            value:'',
            validation: {
                required : true
            },
            valid : false,
            touched:false
         },
    street: {
        elementType: 'input',
        elementConfig: {
            type: "text",
            placeholder:"street Name"
        },
        value:'',
        validation: {
            required : true
        },
        valid : false,      touched:false
    },
       country: {
             name:'country',
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder:"enter country Name"
            },
              value:'',
              validation: {
                required : true
            },
            valid : false,
            touched:false
     },
            postalCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder:"enterpostal Code"
                },
                value:'',
                validation: {
                    required : true, 
                    minLength: 5,
                    maxLength:5
                },
                valid : false,
                touched:false
             },
             modeOfDelivery:{
                elementType:'select',
                elementConfig: {
                  options:[
                   {value: 'fastest', displayValue:'Fastest'},
                   {value: 'cheapest', displayValue:'Cheapest'},
                  ]
                },
                validation: {
                   },
                value:'fastest',
                valid : true,
                touched:false
             },   
     },
     loading :false,
     formIsValid: false
     }

    orderHandler=(event)=>{
        console.log(this.props.ings);
      event.preventDefault();
        this.setState({loading:true});
const formData={};
for(let formId in this.state.orderForm)
{
    formData[formId]= this.state.orderForm[formId].value;
// this create key and value pair as name: value in from data
}
      const order ={
      ingredients: this.props.ings,
      price: this.props.price,
      orderData:formData
           }
             axios.post("/Orders.json", order)
                  .then(response =>{
                    this.setState({loading:false});
                           })
                   .catch(error =>{
                          this.setState({ loading:false})
                               });
        
    }
    
    checkValidity(value,rules){
        console.log("in checkValidity");
        let isValid = true;
        if(!rules){
            return true;
        }
      if(rules.required){
         isValid=value.trim() !== '' && isValid;
      }
      if(rules.minLength){
          isValid= value.length>= rules.minLength && isValid;
      }
      if(rules.maxLength){
          isValid = value.length<= rules.maxLength && isValid;
      }
      return isValid;
    }

    inputChangedHandler = (event,id) =>{
        const updatedform= {
            ...this.state.orderForm
        }
        console.log("input"+updatedform[id]);
       const updatedFormEle={...updatedform[id]};
       console.log("change handler"+updatedFormEle.config);
        updatedFormEle.value= event.target.value;
        console.log(updatedFormEle.value);
        updatedFormEle.touched = true;
        console.log(updatedFormEle.touched);
        updatedFormEle.valid= this.checkValidity(updatedFormEle.value,updatedFormEle.validation);
        updatedform[id]=updatedFormEle;
        console.log("input change handler"+updatedform);
        let formIsValid = true;
        for (let id in updatedform)
            {
                formIsValid = updatedform[id].valid && formIsValid;
            }
            this.setState({orderFrom:updatedform, formIsValid: formIsValid});
                     console.log(this.state.formIsValid);
           }

     render(){
           const formElementArray = [];
        for(let key in  this.state.orderForm){
             formElementArray.push( 
                 { id: key, config: this.state.orderForm[key]}
             );
            }
                  let form = (
                <form onSubmit={this.orderHandler}>
                  { formElementArray.map((formElement)=>(
                    <Input 
                          elementType={formElement.config.elementType}
                           name={formElement.id} 
                            key={formElement.id} 
                            elementConfig={formElement.config.elementConfig} 
                            value={formElement.config.value} 
                            className={classes.contactDataItem}
                            invalid= {!formElement.config.valid}
                            touched = {formElement.config.touched}
                            shouldValidate={formElement.config.validation}
                            changed={(event)=>this.inputChangedHandler(event,formElement.id)} />
                    ) )} 
                    
                 <Button btnType="Success"  style={{"display":"block"}} disabled={!this.state.formIsValid}
                 onClick={(event)=>{this.orderHandler(event)}}>Order </Button>  
                    </form> 
          );

          console.log(form);
       if(this.state.loading){
           form =<Spinner /> ;
       }

       return(
        <div className={classes.contactData}>
          <h4>Enter your contact Data </h4>
          {form}
        </div>
       );
    }
}

const mapStateToProps= (state) =>{
    return{
        ings: state.ingredients,
        price: state.totalPrice
    }
}
export default connect(mapStateToProps)(ContactData);