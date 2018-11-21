import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './App.container';
import store from './store/store';

import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
