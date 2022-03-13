import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const NavBar = () => {
    return (
        <ul className="navigation-bar">
            <li className="navigation-link">
                <NavLink to="/" className={({isActive}) => isActive ? 'active-link' : 'navigation-link' }>
                    Home
                </NavLink>
            </li>
            <li className="navigation-link">
                <NavLink to="/questions/new" className={({isActive}) => isActive ? 'active-link' : 'navigation-link' }>
                    New Question
                </NavLink>
            </li>
            <li className="navigation-link">
                <NavLink to="/leader-board" className={({isActive}) => isActive ? 'active-link' : 'navigation-link' }>
                    Leader Board
                </NavLink>
            </li>
            <li className="logout-button">
                <LogoutButton />
            </li>
        </ul>
    );
};

export default NavBar;