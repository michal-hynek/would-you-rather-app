import React from "react";
import { connect } from "react-redux";
import { login } from "../actions/login";

const loginAs = (event, dispatch) => {
    const userId = event.target.value;

    event.preventDefault();
    dispatch(login(userId));
};

const SignIn = (props) => {
    return (
        <div className="login">
            <h1 className="login-header">Welcome to the Would You Rather App</h1>

            <div className="login-form">
                <h2>Please sign in to continue</h2>
                <img src="logo192.png" width="192px" alt="React Logo" />

                <label htmlFor="users" className="user-drop-down-label">Sign in as:</label>
                <select name="users" id="users" defaultValue="" placeholder="Select a user" className="user-drop-down">
                    <option disabled value=""> -- select a user -- </option>
                    {props.users.map(userId => (
                        <option key={userId} value={userId} onClick={(e) => loginAs(e, props.dispatch)}>{userId}</option>
                    ))}

                </select> 
            </div>
        </div>
    );
};

const mapStateToProps = ({ users }) => {
    return {
        users: Object.keys(users)
    };
};

export default connect(mapStateToProps)(SignIn);