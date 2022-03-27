import React from "react";
import { NavLink } from "react-router-dom";
import LogoutContainer from "./LogoutContainer";

const NavBar = () => {
    return (
        <header className="App-header">
            <ul className="navigation-bar">
                <li className="navigation-link">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : 'navigation-link'}>
                        Home
                    </NavLink>
                </li>
                <li className="navigation-link">
                    <NavLink to="/add" className={({ isActive }) => isActive ? 'active-link' : 'navigation-link'}>
                        New Question
                    </NavLink>
                </li>
                <li className="navigation-link">
                    <NavLink to="/leader-board" className={({ isActive }) => isActive ? 'active-link' : 'navigation-link'}>
                        Leader Board
                    </NavLink>
                </li>
                <li className="logout-button">
                    <LogoutContainer />
                </li>
            </ul>
        </header>
    );
};

export default NavBar;