// @flow
import React from 'react';
import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

export const store = createStore(
  combineReducers({
    router: routerReducer
  }),
  compose(
    applyMiddleware(thunk),
    applyMiddleware(
      routerMiddleware(history)
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);