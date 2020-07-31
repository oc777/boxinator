import { combineReducers } from "redux";
import dispatchReducer from "./dispatchReducers";
import countryReducer from "./countryReducers";

export default combineReducers({
    dispatchReducer,
    countryReducer
});