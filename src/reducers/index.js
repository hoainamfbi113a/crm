import {combineReducers} from "redux";
import postReducer from "./PostReducer"
import userReducer from "./userReducer";
const rootReducer = combineReducers({
    postReducer:postReducer,
    userReducer: userReducer
})
export default rootReducer;