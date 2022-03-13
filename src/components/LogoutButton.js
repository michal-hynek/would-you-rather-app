import React from "react";

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

export default LogoutButton;