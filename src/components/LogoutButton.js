import React from "react";
import PropTypes from "prop-types";

const logoutClickHandler = (event, callback) => {
    event.preventDefault();
    callback();
};

const LogoutButton = (props) => {
    return (
        <button className="logout-button" onClick={(e) => logoutClickHandler(e, props.onLogout)}>
            Logout
        </button>
    );
};

LogoutButton.propTypes = {
    onLogout: PropTypes.func.isRequired,
};

export default LogoutButton;