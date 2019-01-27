import { combineReducers } from "redux-immutable";
import { connectRouter } from "connected-react-router/immutable";
import UsersReducer from "./components/Users/reducer";

const AppReducers = history =>
  combineReducers({
    router: connectRouter(history),
    [UsersReducer.storeRoot]: UsersReducer.reduce
  });

export default AppReducers;
