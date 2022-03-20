import { NEW_QUESTION_ADDED } from "../actions/questions";
import { RECEIVE_USERS } from "../actions/users";

export const users = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_USERS:
            return action.users;
        
        case NEW_QUESTION_ADDED:
            const author = action.question.author;
            const questionId = action.question.id;

            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat(questionId),
                },
            };

        default:
            return state;
    }
};
