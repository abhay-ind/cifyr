import { createStore, combineReducers } from "redux";
import userReducer from "./userStore";
import postReducer from "./postStore"

const Store = createStore(
  combineReducers({
    user: userReducer,
    posts: postReducer,
  })
);

// console.log(Store.getState())
export default Store;
