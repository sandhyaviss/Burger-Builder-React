import React, { Component } from '../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import Layout from './hoc/layout/Layout';
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder';
import Checkout from './conatiner/Checkout/Checkout';
import { Route,Switch } from '../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-router-dom';
import Orders from './conatiner/orders/orders';
 
class App extends Component {
    render() {
    return (
         <Layout >
           <Switch>
            <Route path="/checkout" component={ Checkout } />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder}/> 
            
          </Switch>
        </Layout>
     //order of the routes matters if / is executed /orders doesnot execute
    );
  }
}

export default App;
