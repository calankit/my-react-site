import React from "react";
import { Link } from "react-router-dom";
import "../Web-site/Web-Styling/Nav.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top custom-navbar">
            <div className="container">
                <Link className="navbar-brand fw-bold text-primary" to="/">
                    <img src="/logo.png" alt="Logo" style={{ height: "40px" }} />
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

                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    {/* Center Navigation Links */}
                    <ul className="navbar-nav mx-auto gap-4">
                        <li className="nav-item">
                            <a className="nav-link active" href="#Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>

                    {/* User Icon Dropdown */}
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <button
                                className="nav-link dropdown-toggle btn btn-link"
                                id="loginDropdown"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="bi bi-person-circle fs-4"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="loginDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/login">
                                        Login
                                    </Link>
                                </li>
                                {/* Optional: Add more options like Register/Profile */}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
