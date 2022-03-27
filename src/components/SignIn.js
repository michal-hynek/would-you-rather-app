import React from "react";
import PropTypes from "prop-types";

const signInClickHandler = (event, callback) => {
    const userId = event.target.value;
    event.preventDefault();
    callback(userId);
};

const SignIn = (props) => {
    return (
        <div className="login">
            <h1 className="login-header">Welcome to the Would You Rather App</h1>

            <div className="login-form">
                <h2>Please sign in to continue</h2>
                <img src="logo192.png" width="192px" alt="React Logo" />

                <label htmlFor="users" className="user-drop-down-label">Sign in as:</label>
                <select id="users"
                    name="users"
                    defaultValue=""
                    placeholder="Select a user"
                    onChange={e => signInClickHandler(e, props.onSignIn)}
                    className="user-drop-down"
                >
                    <option disabled value=""> -- select a user -- </option>
                    {props.users.map(userId => (
                        <option key={userId} value={userId}>{userId}</option>
                    ))}
                </select> 
            </div>
        </div>
    );
};

SignIn.propTypes = {
    users: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSignIn: PropTypes.func.isRequired,
};

export default SignIn;