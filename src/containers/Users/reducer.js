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

  /**
   *
   * @param {Immutable.Map} state
   * @param {ActionUpdateEntity} action
   * @return {Immutable.Map} new state
   */
  updateRecord(state, action) {
    // const meta = EntityService.getMetaByInstance(action.entityRecord);
    return state;
  }
}

export default new UsersReducer("usersReducer");
