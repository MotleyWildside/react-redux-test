// This will can combine one or more Reducer functions and export it through Redux's combineReducer helper.
import {combineReducers} from "redux";

import matrix from "./matrix";
import tabs from "./tabs";
// import secondCounter from './exampleReducer';

export default combineReducers({
    matrix,
    tabs,
});

// Example for combining multiple reducers:
// export default combineReducers({ count, secondCounter });
