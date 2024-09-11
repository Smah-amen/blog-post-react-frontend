import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AppNavbar.css";
import { FaHome, FaUser, FaSignOutAlt, FaSignInAlt } from 'react-icons/fa';

function AppNavbar({ isLoggedin, logout }) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid navStyle">
                <Link to="/" className="navbar-brand text-white d-flex align-items-center">
                    <FaHome className="me-2" />
                    Home
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {!isLoggedin && (
                            <li className="nav-item">
                                <Link to="/register" className="nav-link text-white">
                                    <FaUser className="me-2" />
                                    Register
                                </Link>
                            </li>
                        )}
                        <li className="nav-item">
                            <Link
                                to={isLoggedin ? "" : "/login"}
                                className="nav-link text-white"
                                onClick={() => {
                                    if (isLoggedin) {
                                        sessionStorage.clear();
                                        logout();
                                    }
                                }}
                            >
                                {isLoggedin ? (
                                    <>
                                        <FaSignOutAlt className="me-2" />
                                        Log out
                                    </>
                                ) : (
                                    <>
                                        <FaSignInAlt className="me-2" />
                                        Log in
                                    </>
                                )}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default AppNavbar;
