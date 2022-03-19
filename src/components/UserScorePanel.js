import React from "react";
import PropTypes from "prop-types";

const UserScorePanel = ({ rank, username, avatarURL, score, answeredQuestions, createdQuestions }) => {
    return (
        <tr className="user-score-panel">
            <td className="user-rank">
                {rank}.
            </td>
            <td className="user-info">
                <a href="https://www.flaticon.com/free-icons/person" title="person icons" target="_blank">
                    <img src={avatarURL} alt="User's avatar image - person icons created by Vitaly Gorbached - Flaticon" />
                </a>
                <div className="username">{username}</div>
            </td>
            <td className="score-details">
                <div className="total-score">Score: {score}</div>
                <div className="answered-questions">Answered questions: {answeredQuestions}</div>
                <div className="created-questions">Created questions: {createdQuestions}</div>
            </td>
        </tr>
    );
};

UserScorePanel.propTypes = {
    rank: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired,
    answeredQuestions: PropTypes.number.isRequired,
    createdQuestions: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
};

export default UserScorePanel;
