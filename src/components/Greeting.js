import React from "react";
import PropTypes from "prop-types";

const Greeting = ({ name }) => {
    return (
        <div className="greeting">
            Hello, {name}
        </div>
    )
};

Greeting.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Greeting;