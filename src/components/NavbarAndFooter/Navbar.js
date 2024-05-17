import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false); // The state controls whether the folding menu is expanded or not.

    return (
        <nav className="navbar navbar-expand-lg bg-lightgreen">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1 text-white font-weight-bold">EasyLeave</span>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded={isNavExpanded ? "true" : "false"} 
                    aria-label="Toggle navigation"
                    onClick={() => setIsNavExpanded(!isNavExpanded)} // useState decide whether the navbar should be expanded.
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavExpanded ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white">Hemsida</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link text-white">Konto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
