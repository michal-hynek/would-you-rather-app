import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { login } from "../actions/login";
import SignIn from "./SignIn";

const mapStateToProps = ({ currentUser, users }) => {
    return {
        currentUser,
        users: Object.keys(users)
    };
};

const SignInContainer = (props) => {
    if (props.currentUser) {
        return (
            <Navigate to="/" />
        );
    }

    return (
        <SignIn users={props.users || []} onSignIn={(userId) => props.dispatch(login(userId))} />
    );
};

SignInContainer.propTypes = {
    currentUser: PropTypes.string,
    users: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(SignInContainer);