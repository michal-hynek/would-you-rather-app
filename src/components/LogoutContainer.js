import React, { Fragment } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { logout } from "../actions/logout";
import LogoutButton from "./LogoutButton";
import Greeting from "./Greeting";

const logoutCurrentUser = (navigate, dispatch) => {
    dispatch(logout());
    navigate("/login");
};

const mapStateToProps = (state) => {
    const user = state.users[state.currentUser];

    return {
        name: user.name,
    };
};

const LogoutContainer = ({ name, dispatch}) => {
    const navigate = useNavigate();

    return (
        <Fragment>
            <Greeting name={name} />
            <LogoutButton onLogout={() => logoutCurrentUser(navigate, dispatch)} />
       </Fragment>
    );
}

LogoutContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(LogoutContainer);