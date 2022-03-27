import React from "react";
import PropTypes from "prop-types";

const ViewPollResults = ({ author, question, selectedOption }) => {
    const optionOneStyle = selectedOption === "optionOne" ? "answered-option-one" : "option-one";
    const optionTwoStyle = selectedOption === "optionTwo" ? "answered-option-two" : "option-two";
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;

    return (
        <div className="poll-result-panel">
            <div className="author">
                <a href="https://www.flaticon.com/free-icons/person" title="person icons" target="_blank">
                    <img src={author.avatarURL} alt="User's avatar image - person icons created by Vitaly Gorbached - Flaticon" />
                </a>
                <span className="author-asks">{author.name} asks</span>
            </div>
            <div className="options">
                <span className="prompt">Would you rather:</span>
                <span className={optionOneStyle}>{question.optionOne.text}</span>
                <span className="option-one-result">{optionOneVotes / totalVotes * 100}% ({optionOneVotes} of {totalVotes})</span>
                <span className={optionTwoStyle}>{question.optionTwo.text}</span>
                <span className="option-two-result">{optionTwoVotes / totalVotes * 100}% ({optionTwoVotes} of {totalVotes})</span>
            </div>
        </div>
    );
};

ViewPollResults.propTypes = {
    author: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
    selectedOption: PropTypes.string.isRequired,
}

export default ViewPollResults;
