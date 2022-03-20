import { _getQuestions, _getUsers } from "../api/API";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";

export const RECEIVE_USERS = "RECEIVE_USERS";

export const handleInitialData = () => {
    return (dispatch) => {
        Promise.all([
            _getUsers().then((users) => {
                dispatch(receiveUsers(users));
            }),
            _getQuestions().then((questions) => {
                dispatch(receiveQuestions(questions));
            })
        ]);
    }
};
