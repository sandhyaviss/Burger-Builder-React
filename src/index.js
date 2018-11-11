import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import builderReducer from './store/reducer/burgerBuilder';
import thunk from 'redux-thunk';

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(builderReducer,composeEnhancers(
          applyMiddleware(thunk)
) );

const app= (
 
  <Provider store={store}>
    <BrowserRouter  >
      <App />
     </BrowserRouter >
  </Provider>
);
//paranthesis allows more than one jsx elements
ReactDOM.render(app , document.getElementById('root'));
registerServiceWorker();
