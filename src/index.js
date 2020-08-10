import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import store from './client/redux/store';
import { Provider } from 'react-redux';
import AppRoutes from './client/containers/Routes/Routes';
import { createBrowserHistory } from "history";
import 'bootstrap/dist/css/bootstrap.min.css';
import './client/index.css';

const webHistory = createBrowserHistory();
const routing = (
  <Provider store={store}>
    <Router history={webHistory}>
      <AppRoutes />
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));
