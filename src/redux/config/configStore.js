import { combineReducers, createStore } from "redux";
import bucket from "../modules/bucket";

const rootReducer = combineReducers({
  bucket: bucket,
});
const store = createStore(rootReducer);
export default store;
