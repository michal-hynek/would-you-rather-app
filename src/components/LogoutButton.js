import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../actions/logout";

const logoutCurrentUser = (event, navigate, dispatch) => {
    event.preventDefault();
    dispatch(logout());
    navigate("/");
};

const LogoutButton = (props) => {
    const navigate = useNavigate();

    return (
        <button className="logout-button" onClick={(e) => logoutCurrentUser(e, navigate, props.dispatch)}>
            Logout
        </button>
    );
};

export default connect()(LogoutButton);