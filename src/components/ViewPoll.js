import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import SubmitPoll from "./SubmitPoll";
import ViewPollResults from "./ViewPollResults";

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        users: state.users,
        questions: state.questions,
        userAnswers: state.users[state.currentUser]?.answers,
    };
}

const ViewPoll = ({ currentUser, users, questions, userAnswers, questionId }) => {
    const { id } = useParams();
    const question = questions[id];
    const author = users[question.author];
    const selectedOption = users[currentUser].answers[id];
    const userAnswered = !!selectedOption;

    return (
        <div>
            <NavBar />
            {userAnswered
                ? <ViewPollResults author={author} question={question} selectedOption={selectedOption} />
                : <SubmitPoll />
            }
        </div>
    );
};

export default connect(mapStateToProps)(ViewPoll);
