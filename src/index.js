import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }	from 'react-redux';
import { createStore } from 'redux';
import reducer from './helpers/reducer.js'; 
import App from './components/App';
import './styles/index.css';

 
export const store = createStore( 
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);


ReactDOM.render(
  <Provider store={store}>
   <App />
  </Provider> 
, document.getElementById('root'));

 
