import { LOGIN } from "../actions/login";
import { LOGOUT } from "../actions/logout";

export const currentUser = (state = null, action) => {
    switch (action.type) {
        case (LOGIN):
            return action.userId;
        case (LOGOUT):
            return null;
        default:
            return state;
    }
};
