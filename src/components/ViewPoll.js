import React from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import AnswerPoll from "./AnswerPoll";
import ViewPollResults from "./ViewPollResults";

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        users: state.users,
        questions: state.questions,
        userAnswers: state.users[state.currentUser]?.answers,
    };
}

const ViewPoll = ({ currentUser, users, questions }) => {
    const { id } = useParams();

    const question = questions[id];
    const author = users[question.author];
    const selectedOption = users[currentUser].answers[id];
    const userAnswered = !!selectedOption;

    const submitPollAnswer = (questionId, option) => {
        // TODO
        console.log(`Submit ${option} for ${questionId}`);
    };

    return (
        <div>
            <NavBar />
            {userAnswered
                ? <ViewPollResults author={author} question={question} selectedOption={selectedOption} />
                : <AnswerPoll author={author} question={question} onAnswerPoll={submitPollAnswer} />
            }
        </div>
    );
};

export default connect(mapStateToProps)(ViewPoll);
