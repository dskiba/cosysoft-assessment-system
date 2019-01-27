import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Route } from "react-router";
import { ConnectedRouter } from "connected-react-router/immutable";
import createHistory from "history/createBrowserHistory";

import configureStore from "./store";
import AppSagas from "./sagas";
import Root from "./routes/Root";

const history = createHistory();
const store = configureStore(history);
AppSagas.map(store.runSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path={"/"} render={props => <Root {...props} />} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
