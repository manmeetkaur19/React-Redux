// for only one main reducer that constains all reducers


import change from "./example";

import { combineReducers } from "redux";
const rootReducer = combineReducers({
    change
    // here we can add more reducers by putting comma
});
export default rootReducer;