// @flow
import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger';

import appReducer from 'reducers/AppReducer';

export const history = createHistory();
export const logger = process.env.NODE_ENV === 'development' ? createLogger() : null;

export const store = createStore(
  combineReducers({
    router: routerReducer,
    app: appReducer.reducer
  }),
  compose(
    applyMiddleware(thunk),
    applyMiddleware(
      routerMiddleware(history)
    ),
    applyMiddleware(logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
