import React, { useState } from "react";
import PropTypes from "prop-types";

const QuestionSwitcher = (props) => {
    const [ selectedType, setSelectedType ] = useState(props.initialSelection);
    const unansweredStyle = selectedType === "unanswered" ? "selected" : null;
    const answeredStyle = selectedType === "answered" ? "selected" : null;

    const selectQuestions = (event, type) => {
        event.preventDefault();
        setSelectedType(type);
        props.onSelectQuestions(type);
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
    onSelectQuestions: PropTypes.func.isRequired,
};

export default QuestionSwitcher;
