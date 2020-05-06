import { INCREMENT, DECREMENT } from "./actions";
import { combineReducers } from "redux";

const initialState = {value: 0}

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + 1
            });
        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value - 1
            });;
        default:
            return state;
    }
}

const rootReducer = combineReducers({counter: counterReducer});
export default rootReducer;