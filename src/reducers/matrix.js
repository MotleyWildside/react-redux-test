import {DECREMENT_CELL, INCREMENT_CELL, PICK_CELL, SET_TRANSPARENT_MATRIX} from "../constants/ActionTypes";

const initialState = {
    pickedX: null,
    pickedY: null,
    inputMatrix: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    transparentedMatrix: null,
};

export default function reducer(state = initialState, action) {
    const inputMatrix = [...state.inputMatrix];
    switch (action.type) {
        case PICK_CELL:
            if (action.payload.pickedX === state.pickedX && action.payload.pickedY === state.pickedY) {
                return {...state, ...{pickedX: null, pickedY: null}};
            }

            return {...state, ...action.payload};
        case INCREMENT_CELL:
            if (state.pickedY === null || state.pickedX === null) {
                return state;
            }
            inputMatrix[state.pickedX][state.pickedY]++;

            return {...state, inputMatrix};
        case DECREMENT_CELL:
            if (state.pickedY === null || state.pickedX === null) {
                return state;
            }
            inputMatrix[state.pickedX][state.pickedY]--;

            return {...state, inputMatrix};
        case SET_TRANSPARENT_MATRIX:
            return {...state, transparentedMatrix: action.payload};
        default:
            return state;
    }
}
