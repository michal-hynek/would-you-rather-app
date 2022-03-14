import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../actions/logout";
import LogoutButton from "./LogoutButton";

const logoutCurrentUser = (navigate, dispatch) => {
    dispatch(logout());
    navigate("/login");
};

const LogoutContainer = (props) => {
    const navigate = useNavigate();

    return (
        <LogoutButton onLogout={() => logoutCurrentUser(navigate, props.dispatch)} />
    );
}

export default connect()(LogoutContainer);