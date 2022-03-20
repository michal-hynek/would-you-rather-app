import React, { useState } from "react";
import PropTypes from "prop-types";

const NewQuestionForm = ({ onSubmit }) => {
    const [ optionOne, setOptionOne ] = useState("");
    const [ optionTwo, setOptionTwo ] = useState("");
    const [ optionOneError, setOptionOneError ] = useState("");
    const [ optionTwoError, setOptionTwoError ] = useState("");

    const handleInputChange = (event, setOptionValue) => {
        event.preventDefault();
        setOptionValue(event.target.value);
        clearErrors();
    };

    const setErrors = () => {
        if (!optionOne && !optionOneError) {
            setOptionOneError("Option one is empty");
        }

        if (!optionTwo && !optionTwoError) {
            setOptionTwoError("Option two is empty");
        }
    }

    const clearErrors = () => {
        if (optionOne && optionOneError) {
            setOptionOneError("");
        }

        if (optionTwo && optionTwo) {
            setOptionTwoError("");
        }
    };

    const submitForm = (event) => {
        event.preventDefault();
        const isValid = !!(optionOne && optionTwo);

        if (isValid) {
            onSubmit(optionOne, optionTwo);
            setOptionOne("");
            setOptionTwo("");
        } else {
            setErrors();
        }
    };

    return (
        <div className="new-question-form">
            <h2>Create New Question</h2>
            <p className="new-question-subtitle">Would you rather?</p>
            <form onSubmit={submitForm}>
                {optionOneError ? (<span className="validation-error">{optionOneError}</span>) : ""}
                <input id="option-1"
                    type="text"
                    value={optionOne}
                    onChange={e => handleInputChange(e, setOptionOne, setOptionOneError)}
                    placeholder="Enter the first option"
                    className="new-question-option-1" />

                <span className="or">or</span>

                {optionTwoError ? (<span className="validation-error">{optionTwoError}</span>) : ""}
                <input id="option-2"
                    type="text"
                    value={optionTwo}
                    onChange={e => handleInputChange(e, setOptionTwo, setOptionTwoError)}
                    placeholder="Enter the second option"
                    className="new-question-option-2" />

                <input id="submit-button"
                    type="submit"
                    value="Submit"
                    className="new-question-submit"
                    />
            </form>
        </div>
    );
};

NewQuestionForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default NewQuestionForm;