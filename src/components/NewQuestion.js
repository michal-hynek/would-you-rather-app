import React from "react";
import { connect } from "react-redux";
import { saveNewQuestion } from "../actions/questions";
import NavBar from "./NavBar";
import NewQuestionForm from "./NewQuestionForm";

const mapStateToProps = (state) => {
    return {
        author: state.currentUser,
    };
};

const NewQuestion = ({ author, dispatch }) => {
    const submitNewQuestion = (option1, option2) => {
        dispatch(saveNewQuestion({
            author,
            optionOneText: option1,
            optionTwoTest: option2,
        }));
    };

    return (
        <div>
            <NavBar />
            <NewQuestionForm onSubmit={submitNewQuestion} />
        </div>
    );
}

export default connect(mapStateToProps)(NewQuestion);
