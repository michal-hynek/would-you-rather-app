import React, { useState } from "react";
import PropTypes from "prop-types";

const QuestionSwitcher = (props) => {
    const [ selectedType, setSelectedType ] = useState(props.initialSelection);
    const unansweredStyle = selectedType === "unanswered" ? "selected" : null;
    const answeredStyle = selectedType === "answered" ? "selected" : null;

    const selectQuestions = (event, type) => {
        const selectedQuestions = type === "answered" ? props.answeredQuestions : props.unansweredQuestions;

        event.preventDefault();
        setSelectedType(type);
        props.onSelectQuestions(selectedQuestions);
    };

    return (
        <ul className="question-switcher">
            <li>
                <button
                    className={unansweredStyle}
                    onClick={(e) => selectQuestions(e, "unanswered")}
                >
                    Unanswered Questions
                </button>
            </li>
            <li>
                <button
                    className={answeredStyle}
                    onClick={(e) => selectQuestions(e, "answered")}
                >
                    Answered Questions
                </button>
            </li>
        </ul>
    );
};

QuestionSwitcher.propTypes = {
    initialSelection: PropTypes.string.isRequired,
    answeredQuestions: PropTypes.array.isRequired,
    unansweredQuestions: PropTypes.array.isRequired,
    onSelectQuestions: PropTypes.func.isRequired,
};

export default QuestionSwitcher;
