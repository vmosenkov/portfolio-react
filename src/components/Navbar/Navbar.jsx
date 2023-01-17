import React from 'react';

// dependencies
import { NavLink, useNavigate } from "react-router-dom";

// styles
import "./navbar.scss";

// components
import SwitchTheme from '../UI/SwitchTheme/SwitchTheme';
import LabelLogo from '../UI/LabelLogo/LabelLogo';

const Navbar = () => {

    const navigate = useNavigate();

    const activeLink = 'nav-list__link nav-list__link__active';
    const notActiveLink = 'nav-list__link';

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav__row">
                    <div className="logo" onClick={() => navigate("/")}>
                        <LabelLogo />
                    </div>
                    <SwitchTheme/>
                    <ul className='nav-list'>

                        {/* Link to Home */}
                        <li className='nav-list__item'>
                            <NavLink
                                className={ ({ isActive }) => isActive ? activeLink : notActiveLink}
                                to="/"
                                >Home
                            </NavLink>
                        </li>

                        {/* Link to About Me */}
                        <li className='nav-list__item'>
                            <NavLink
                                className={ ({ isActive }) => isActive ? activeLink : notActiveLink}
                                to="/about-me"
                                >About Me
                            </NavLink>
                        </li>

                        {/* Link to Skills */}
                        <li className='nav-list__item'>
                            <NavLink
                                className={ ({ isActive }) => isActive ? activeLink : notActiveLink}
                                to="/skills"
                                >Skills
                            </NavLink>
                        </li>

                        {/* Link to Projects */}
                        <li className='nav-list__item'>
                            <NavLink
                                className={ ({ isActive }) => isActive ? activeLink : notActiveLink}
                                to="/projects"
                                >Projects
                            </NavLink>
                        </li>

                        {/* Link to Contacts */}
                        <li className='nav-list__item'>
                            <NavLink
                                className={ ({ isActive }) => isActive ? activeLink : notActiveLink}
                                to="/contacts"
                                >Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar