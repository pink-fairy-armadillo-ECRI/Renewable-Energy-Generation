import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import './styles.scss';
import App from './App.jsx';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);