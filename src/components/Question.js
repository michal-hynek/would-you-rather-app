import React from "react";
import PropTypes from "prop-types";
import ViewPollButton from "./ViewPollButton";

const Question = ({ question }) => {
    const optionOneStyle = question.answer === 'optionOne' ? 'answered-option-one' : 'option-one';
    const optionTwoStyle = question.answer === 'optionTwo' ? 'answered-option-two' : 'option-two';

    return (
        <div className="question-panel">
            <div className="author">
                <a href="https://www.flaticon.com/free-icons/person" title="person icons" target="_blank" rel="noreferrer">
                    <img src={question.author.avatarURL} alt="User's avatar - person icons created by Vitaly Gorbached - Flaticon" />
                </a>
                <span className="author-asks">{question.author.name} asks</span>
            </div>
            <div className="options">
                <span className="prompt">Would you rather:</span>
                <span className={optionOneStyle}>{question.optionOne.text}</span>
                <span className={optionTwoStyle}>{question.optionTwo.text}</span>
            </div>
            <ViewPollButton questionId={question.id} />
        </div>
    );
};

Question.propTypes = {
    question: PropTypes.object.isRequired,
};

export default Question;