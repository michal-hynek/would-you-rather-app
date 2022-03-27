import React, { useState } from "react";
import PropTypes from "prop-types";

const AnswerPoll = ({ author, question, onAnswerPoll }) => {
    const [ selectedOption, setSelectedOption ] = useState("optionOne");
    const [ submitInProgress, setSubmitInProgress ] = useState(false);

    const submitForm = (event) => {
        event.preventDefault();
        setSubmitInProgress(true);
        onAnswerPoll(question.id, selectedOption);
    };

    return (
        <div className="answer-poll-panel">
            <div className="author">
                <a href="https://www.flaticon.com/free-icons/person" title="person icons" target="_blank">
                    <img src={author.avatarURL} alt="User's avatar image - person icons created by Vitaly Gorbached - Flaticon" />
                </a>
                <span className="author-asks">{author.name} asks</span>
            </div>
            <form className="options" onSubmit={submitForm}>
                <span className="prompt">Would you rather:</span>

                <label htmlFor="option-one" className="option-one-label">{question.optionOne.text}</label>
                <input id="option-one"
                    type="radio"
                    name="answer"
                    value="optionOne"
                    checked={selectedOption === "optionOne" ? "checked" : ""}
                    onChange={() => setSelectedOption("optionOne")}
                    disabled={submitInProgress}
                    className="option-one-input" />

                <label htmlFor="option-two" className="option-two-label">{question.optionTwo.text}</label>
                <input id="option-two"
                    type="radio"
                    name="answer"
                    value="optionTwo"
                    checked={selectedOption === "optionTwo" ? "checked" : ""}
                    onChange={() => setSelectedOption("optionTwo")}
                    disabled={submitInProgress}
                    className="option-two-input" />

                <input id="submit-button"
                    type="submit"
                    value="Submit"
                    className="submit-button"
                    disabled={submitInProgress} />
            </form>
        </div>
    );
};

AnswerPoll.propTypes = {
    author: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
    onAnswerPoll: PropTypes.func.isRequired,
};

export default AnswerPoll;
