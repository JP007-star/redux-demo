import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';

// ACTION  --> any function that return value
const increment=()=>{
  return {
    type:'INCREMENT'
  }
}

const decrement=()=>{
  return {
    type:'DECREMENT'
  }
}
// REDUCER --> manage state of element
const reducer=(state=0,action)=>{
  switch (action.type) {
    case 'INCREMENT':
      return state+1;
      break;
    case 'DECREMENT':
      return state-1;
    default:
      break;
  }

}
// STORE--> save the state 
const store=createStore(reducer);
store.subscribe(()=>{console.log(store.getState());})
// DISPATCH --> use to call the action
store.dispatch(increment());
store.dispatch(increment())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
