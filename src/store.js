/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import createReducer from "./reducers";
import { routerMiddleware } from "connected-react-router/immutable";

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ || (() => noop => noop);

/**
 * Store configuration method
 * @param {object} history browser
 * @return {object} store object
 */
export default function configureStore(history) {
  const sagaMiddleware = createSagaMiddleware();
  const routerHistoryMiddleware = routerMiddleware(history);

  const middlewares = [sagaMiddleware, routerHistoryMiddleware];

  const enhancers = [applyMiddleware(...middlewares), devtools()];

  const store = createStore(createReducer(history), compose(...enhancers));

  store.runSaga = sagaMiddleware.run;

  return store;
}
