import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import applicationReducer from 'src/app/reducer';
import signInReducer from 'src/pages/sign-in/reduce';
import signUpReducer from 'src/pages/sign-up/reduce';
import { history } from 'src/history';

const logger = createLogger({
  collapsed: true
});

const middlewares =  [
  routerMiddleware(history),
  logger,
]

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  applicationReducer: applicationReducer,
  signIn: signInReducer,
  signUp: signUpReducer
});

const store = createStore(createRootReducer(history), applyMiddleware(...middlewares));

export default store;
