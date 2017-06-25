import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Provider }					    from 'react-redux';
import { combineReducers, createStore } from 'redux';
import skladkaReducer from './helpers/skladkaReducer.js'; 
 
import './styles/index.css';

const rootReducers = combineReducers({ 
  skladka : skladkaReducer 
   
}); 

export const store = createStore( 
	rootReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);


ReactDOM.render(
  <Provider store={store}>
   <App />
</Provider> 
, document.getElementById('root'));

 
