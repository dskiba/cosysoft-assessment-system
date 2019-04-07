import ReduxReducer from "../../records/ReduxReducer";
// import { ActionUpdateEntity } from "./actions";
// import KeyMap from "./constants";
import { Map } from "immutable";

class UsersReducer extends ReduxReducer {
  bindActions() {
    return new Map({
      qwe: this.updateRecord
    });
  }

  updateRecord(state, action) {
    return state;
  }
}

export default new UsersReducer("usersReducer");
