import React from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import NewQuestionForm from "./NewQuestionForm";

const NewQuestion = () => {
    return (
        <div>
            <NavBar />
            <NewQuestionForm />
        </div>
    );
}

export default connect()(NewQuestion);
