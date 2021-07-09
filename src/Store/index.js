import { createStore, combineReducers } from "redux";
import userReducer from "./userStore";

const Store = createStore(
  combineReducers({
    user: userReducer,
  })
);
export default Store;
