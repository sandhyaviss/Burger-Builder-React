import React,{Component } from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import CheckoutSummary from '../../components/Order/CheckoutSummary';
import BurgerBuilder from '../../components/BurgerBuilder/BurgerBuilder';
import { Route } from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-router-dom';
import { connect } from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-redux';
import ContactData from './contact-data/Contact-data';
import axios from '../../axios-order';
import 'url-search-params-polyfill';


class Checkout extends Component{
                     
    cancelHandler= () =>{
         //instead of Link we can use history push property
        this.props.history.goBack();
    }

    continueHandler=()=>{
        this.props.history.replace('/checkout/contact-data');
    }


    render(){
        return (
            <div>
        <CheckoutSummary 
        ingredients={this.props.ings}
        cancelButton={ this.cancelHandler}
        continueButton ={ this.continueHandler}
        />
         <Route path= {this.props.match.path + "/contact-data"} 
            component ={ContactData} />
            </div>
        );

    }
}

const mapStateToProps = state =>{
    return {
        ings: state.ingredients,
            }
}
export default connect(mapStateToProps)(Checkout) ;