import { combineReducers } from "redux"
import counter from "./counter"
import isLoggedIn from "./isLoggedIn"
const allReducer=combineReducers({counter,isLoggedIn}) 
export default allReducer;