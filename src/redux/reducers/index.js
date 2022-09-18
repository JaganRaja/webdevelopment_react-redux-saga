import { combineReducers } from "redux";
import Users from "./users";

const rootReducer = combineReducers({
  // All reducers will be here
  usersReducers: Users,
});

export default rootReducer;
