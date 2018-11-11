import React,{Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary';
import BurgerBuilder from '../../components/BurgerBuilder/BurgerBuilder';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ContactData from '../Checkout/contact-data/Contact-data';
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