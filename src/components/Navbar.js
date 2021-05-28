import React from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css'

function Navbar() {
    return (
        <>
        <nav className="navbar">
            
            <div className="nav-container">
                <NavLink exact to="/" activeClassName="active" className="nav-logo">
                    goHIKE
                </NavLink>
            </div>
            <ul className="nav-menu">
                <li className="nav-item">
                <NavLink exact to="/" activeClassName="active" className="nav-links">
                    Home
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink exact to="/about" activeClassName="active" className="nav-links">
                    About
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink exact to="/contact" activeClassName="active" className="nav-links">
                    Contact
                </NavLink>
                </li>
            </ul>

        </nav>
        </>
    );
}

export default Navbar
