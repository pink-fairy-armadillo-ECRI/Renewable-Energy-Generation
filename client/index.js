import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './styles.scss';
import App from './app.jsx';
import store from './store';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
