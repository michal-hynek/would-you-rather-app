import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/login";
import SignIn from "./SignIn";

const mapStateToProps = ({ currentUser, users }) => {
    return {
        currentUser,
        users: Object.keys(users)
    };
};

const SignInContainer = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignIn = (userId) => {
        const redirectLocation = location.state?.from ? location.state?.from : "/";

        props.dispatch(login(userId));
        navigate(redirectLocation);
    }

    return (
        <SignIn users={props.users || []} onSignIn={(userId) => handleSignIn(userId)} />
    );
};

export default connect(mapStateToProps)(SignInContainer);