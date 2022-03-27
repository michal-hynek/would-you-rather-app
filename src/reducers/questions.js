import { NEW_QUESTION_ADDED, QUESTION_ANSWERED, RECEIVE_QUESTIONS } from "../actions/questions";

export const questions = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return action.questions;
        
        case NEW_QUESTION_ADDED:
            return {
                ...state,
                [action.question.id]: action.question,
            };
        
        default:
            return state;
    } 
};
