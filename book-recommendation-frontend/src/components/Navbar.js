import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Navbar.css';

function Navbar({ isLoggedIn, handleLogout }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">Book App</NavLink>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    {isLoggedIn && (
                        <>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" activeClassName="active">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/profile" activeClassName="active">Profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/recommendations" activeClassName="active">Recommendations</NavLink>
                            </li>
                        </>
                    )}
                </ul>
                <ul className="navbar-nav ml-auto">
                    {!isLoggedIn ? (
                        <>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register">Register</NavLink>
                            </li>
                        </>
                    ) : (
                        <li className="nav-item">
                            <button className="btn btn-outline-danger nav-link" style={{ cursor: 'pointer' }}
                                    onClick={handleLogout}>Logout
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
