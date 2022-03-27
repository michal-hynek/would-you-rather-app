import React, { useState } from "react";
import { connect } from "react-redux";
import NavBar from './NavBar';
import Question from "./Question";
import QuestionSwitcher from "./QuestionSwitcher";

const mapStateToProps = (state) => {
    const answeredQuestions = getQuestions(state, true)
        .map(questionId => questionDetails(state, questionId))
        .sort(sortByTimestamp);

    const unansweredQuestions = getQuestions(state, false)
        .map(questionId => questionDetails(state, questionId))
        .sort(sortByTimestamp);
    
    return {
        answeredQuestions,
        unansweredQuestions,
    };
};

const getQuestions = (state, answered) => {
    return Object.keys(state.questions).filter(questionId => {
        const hasAnswer = Object.keys(state.users[state.currentUser].answers).includes(questionId);

        return answered ? hasAnswer : !hasAnswer;
    });
};

const questionDetails = (state, questionId) => {
    const question = state.questions[questionId];

    return {
        ...question,
        author: state.users[question?.author],
        answer: state.users[state.currentUser]?.answers[questionId],
    };
};

const sortByTimestamp = (question1, question2) => ( question2.timestamp - question1.timestamp );

const Home = ({ answeredQuestions, unansweredQuestions }) => {
    const [ selectedQuestionType, setSelectedQuestionType ] = useState("unanswered");

    const selectQuestions = (questionType) => {
        setSelectedQuestionType(questionType);
    };

    let selectedQuestions = [];
    if (selectedQuestionType === "answered") {
        selectedQuestions = answeredQuestions;
    } else if (selectedQuestionType === "unanswered") {
        selectedQuestions = unansweredQuestions;
    }

    return (
        <div>
            <NavBar />
            <QuestionSwitcher initialSelection="unanswered" onSelectQuestions={selectQuestions} />

            {selectedQuestions.map(q => (
                <Question key={q.id} question={q} />
            ))}
        </div>
    );
};

export default connect(mapStateToProps)(Home);
