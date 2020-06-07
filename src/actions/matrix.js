import {DECREMENT_CELL, INCREMENT_CELL, PICK_CELL} from "../constants/ActionTypes";

export function pickCell(payload) {
    return {
        type: PICK_CELL,
        payload: payload
    };
}

export function incrementCell(payload) {
    return {
        type: INCREMENT_CELL,
        payload: payload
    };
}

export function decrementCell(payload) {
    return {
        type: DECREMENT_CELL,
        payload: payload
    };
}
