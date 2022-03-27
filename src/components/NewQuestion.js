import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveNewQuestion } from "../actions/questions";
import NavBar from "./NavBar";
import NewQuestionForm from "./NewQuestionForm";

const mapStateToProps = (state) => {
    return {
        author: state.currentUser,
    };
};

const NewQuestion = ({ author, dispatch }) => {
    const navigate = useNavigate();
    const submitNewQuestion = (option1, option2) => {
        dispatch(saveNewQuestion({
            author,
            optionOneText: option1,
            optionTwoText: option2,
        }));

        navigate("/");
    };

    return (
        <div>
            <NavBar />
            <NewQuestionForm onSubmit={submitNewQuestion} />
        </div>
    );
}

export default connect(mapStateToProps)(NewQuestion);
