import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import './styles.scss';
import App from './app.jsx';
import store from './store';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);