import { combineReducers } from "redux";
import contentReducer from "./contentReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  userReducer,
  contentReducer,
});

export default reducers;
