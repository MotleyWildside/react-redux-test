import {DECREMENT_CELL, INCREMENT_CELL, PICK_CELL, PICK_TAB, SET_TRANSPARENT_MATRIX} from "../constants/ActionTypes";

const initialState = {
    currentTab: 0,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case PICK_TAB:
            return {...state, currentTab: action.payload};
        default:
            return state;
    }
}
