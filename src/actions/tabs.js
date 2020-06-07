import {PICK_TAB} from "../constants/ActionTypes";

export function pickTab(payload) {
    return {
        type: PICK_TAB,
        payload: payload
    };
}
