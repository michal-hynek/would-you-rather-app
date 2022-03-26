import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import SubmitPoll from "./SubmitPoll";
import ViewPollResults from "./ViewPollResults";

const mapStateToProps = (state) => {
    return {
        userAnswers: state.users[state.currentUser]?.answers,
    };
}

const ViewPoll = ({ userAnswers }) => {
    const { id } = useParams();
    const userAnswered = !!userAnswers[id];
    
    return (
        <div>
            <NavBar />
            {userAnswered
                ? <ViewPollResults />
                : <SubmitPoll />
            }
        </div>
    );
};

export default connect(mapStateToProps)(ViewPoll);
