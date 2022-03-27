import { _saveQuestion, _saveQuestionAnswer } from "../api/API";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_NEW_QUESTION = 'SAVE_NEW_QUESTION';
export const NEW_QUESTION_ADDED = 'NEW_QUESTION_ADDED';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const QUESTION_ANSWERED = 'QUESTION_ANSWERED';

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

export const answerQuestion = ({ userId, questionId, answer }) => {
    return (dispatch) => {
        _saveQuestionAnswer({
            authedUser: userId,
            qid: questionId,
            answer,
        }).then(() => {
            dispatch(questionAnswered({ userId, questionId, answer }));
        });
    };
};

export const questionAnswered = ({ userId, questionId, answer }) => {
    return {
        type: QUESTION_ANSWERED,
        userId,
        questionId,
        answer,
    };
};
