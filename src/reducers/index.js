import { combineReducers } from "redux";
import { currentUser } from "./currentUser";
import { users } from "./users";

export default combineReducers({
    currentUser,
    users,
});
