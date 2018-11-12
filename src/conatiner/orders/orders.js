import React, {Component} from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import axios from '../../axios-order';
import Order from './order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component{
  state={
    orders: [],
  loading : true
}

componentDidMount(){
  axios.get('/orders.json')
        .then(res =>{
          const fetchedOrders = [];
          for(let key in res.data){
               fetchedOrders.push({
                ...res.data[key],
                id:key
                }
              );
          }
          this.setState({loading:false,orders: fetchedOrders})
          console.log(res)} )
        .catch(err=>{
          this.setState({loading:false});
        });
}
  render(){
      return(
      <div>
       {this.state.orders.map((order)=>{
         <Order key={order.id}
                price={order.price}
                 ings= {order.ingredients}/>
       })}
      </div>);
  }
}
export default  Orders;