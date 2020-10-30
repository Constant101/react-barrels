import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import store from './redux/store';
import { Provider } from 'react-redux';

console.log(store.getState());
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
