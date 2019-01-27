export default class ReduxAction {
    constructor(type) {
        this.type = type;
    }

    toAction() {
        const action = {};
        for (let key in this) {
            if (key === 'toAction' || key === 'send') {
                continue;
            }
            action[key] = this[key];
        }
        return action;
    }

    send = (dispatch) => dispatch(this.toAction())
}
