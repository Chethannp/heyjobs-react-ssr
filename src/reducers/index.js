import { combineReducers } from "redux";
import listingReducer from "../thunk-reducer/list/listing.reducers";

export default combineReducers({
  jobs: listingReducer
});
