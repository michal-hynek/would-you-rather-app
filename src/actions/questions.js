import { _saveQuestion } from "../api/API";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_NEW_QUESTION = 'SAVE_NEW_QUESTION';
export const NEW_QUESTION_ADDED = 'NEW_QUESTION_ADDED';

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
};

export const saveNewQuestion = (question) => {
    return (dispatch) => {
        _saveQuestion(question).then((q) => {
            dispatch(newQuestionAdded(q));
        });
    };
};

export const newQuestionAdded = (question) => {
    return {
        type: NEW_QUESTION_ADDED,
        question,
    };
};