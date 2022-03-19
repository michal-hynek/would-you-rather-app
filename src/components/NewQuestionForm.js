import React from "react";

const NewQuestionForm = () => {
    return (
        <div className="new-question-form">
            <h2>Create New Question</h2>
            <p className="new-question-subtitle">Would you rather?</p>
            <form>
                <input id="option-1" type="text" placeholder="Enter the first option" className="new-question-option-1" />
                <span>or</span>
                <input id="option-2" type="text" placeholder="Enter the second option" className="new-question-option-2" />
                <input id="submit-button" type="submit" value="Submit" className="new-question-submit" />
            </form>
        </div>
    );
};

export default NewQuestionForm;