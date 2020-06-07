import { createStore } from "redux";
import reducer from "./reducers"; // Gets the State from the reducer(s)

let store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); // Creates the store from the State received from the reducer(s)

export default store;
