import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


const ViewPollButton = ({ questionId }) => {
    const navigate = useNavigate();

    const viewPoll = (event) => {
        event.preventDefault();
        navigate(`/questions/${questionId}`);
    };

    return (
        <button className="view-poll" onClick={viewPoll}>
            View Poll
        </button>
    );
};

ViewPollButton.propTypes = {
    questionId: PropTypes.string.isRequired,
};

export default ViewPollButton;
