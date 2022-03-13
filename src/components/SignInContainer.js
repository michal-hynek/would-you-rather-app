import React from "react";
import { connect } from "react-redux";
import { login } from "../actions/login";
import SignIn from "./SignIn";

const loginAs = (userId, dispatch) => {
    dispatch(login(userId));
};

const mapStateToProps = ({ users }) => {
    return {
        users: Object.keys(users)
    };
};

const SignInContainer = (props) => {
    return (
        <SignIn users={props.users || []} onSignIn={(userId) => loginAs(userId, props.dispatch)} />
    );
};

export default connect(mapStateToProps)(SignInContainer);