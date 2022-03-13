import { _getUsers } from "../api/API";
import { receiveUsers } from "./users";

export const RECEIVE_USERS = "RECEIVE_USERS";

export const handleInitialData = () => {
    return (dispatch) => {
        _getUsers().then((users) => {
            dispatch(receiveUsers(users));
        });
    }
};
