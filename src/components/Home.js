import React from "react";
import { connect } from "react-redux";
import NavBar from './NavBar';

const mapStateToProps = (state) => {
    const answeredQuestions = Object.keys(state.questions)
        .filter(questionId => {
            return Object.keys(state.users[state.currentUser].answers).includes(questionId);
        })
        .map(questionId => (state.questions[questionId]))
        .sort((a, b) => b.timestamp - a.timestamp);

    const unansweredQuestions = Object.keys(state.questions)
        .filter(questionId => {
            return !Object.keys(state.users[state.currentUser].answers).includes(questionId);
        })
        .map(questionId => state.questions[questionId])
        .sort((a, b) => b.timestamp - a.timestamp);

    return {
        answeredQuestions,
        unansweredQuestions,
    };
};

const Home = (props) => {
    return (
        <div>
            <NavBar />
            <div>Home</div>
        </div>
    );
};

export default connect(mapStateToProps)(Home);
