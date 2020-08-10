import {createStore, combineReducers, compose, applyMiddleware } from 'redux';
import user from './client/redux/reducers/user';
import { logger } from 'redux-logger';

const reducer = combineReducers({
    user: user
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger))); 

it('App Renders without crashing', () => {
  const div = document.createElement('div');
  const body = document.getElementsByTagName("body")[0]
  div.setAttribute("id", "root");
  body.append(div);
});