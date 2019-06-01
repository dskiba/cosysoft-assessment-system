import { Map } from "immutable";

export default class ReduxReducer {
  /**
   * @param {string} storeRoot - key in store
   * @param initialState - default state
   */
  constructor(storeRoot, initialState = new Map()) {
    this.storeRoot = storeRoot;
    this.initialState = initialState;
    this.actions = this.bindActions();
  }

  /**
   * @return {Immutable.Map<string, function>}
   */
  bindActions() {
    return new Map();
  }

  /**
   * @param {object} actionлжуд
   * @param {object} state
   * @return {object} new state
   */
  reduce = (state = this.initialState, action = {}) => {
    if (this.actions.has(action.type)) {
      return this.actions.get(action.type, () => state)(state, action);
    } else {
      return state;
    }
  };
}
