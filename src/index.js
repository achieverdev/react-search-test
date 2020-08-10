import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import store from './client/redux/store';
import { Provider } from 'react-redux';
import AppRoutes from './client/containers/Routes/Routes';
import { createBrowserHistory } from "history";
import * as serviceWorker from './client/serviceWorker';
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
