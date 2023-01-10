import React from 'react';

// dependencies
import { NavLink } from 'react-router-dom';

// styles
import "./Navbar.css";

// components
import SwitchTheme from '../UI/SwitchTheme/SwitchTheme';
import LabelLogo from '../UI/LabelLogo/LabelLogo';

const Navbar = () => {

const activeLink = 'nav-list__link nav-list__link--active';
const notActiveLink = 'nav-list__link';

  return (
    <nav className="nav">
        <div className="container">
            <div className="nav_row">
                <NavLink className="logo" to="/portfolio-react" >
                    <LabelLogo />
                    <strong></strong>
                    portfolio
                </NavLink>
                
                <SwitchTheme/>

                <ul className='nav-list'>
                    <li className='nav-list__item'>
                        <NavLink className={ ({ isActive }) => isActive ? activeLink : notActiveLink} to="/portfolio-react" >Home</NavLink>
                    </li>
                    <li className='nav-list__item'>
                        <NavLink className={ ({ isActive }) => isActive ? activeLink : notActiveLink} to="/portfolio-react/projects" >Projects</NavLink>
                    </li>
                    <li className='nav-list__item'>
                        <NavLink className={ ({ isActive }) => isActive ? activeLink : notActiveLink} to="/portfolio-react/contacts" >Contacts</NavLink>
                    </li>
                    {/* <li className='nav-list__item'>
                        <NavLink className={ ({ isActive }) => isActive ? activeLink : notActiveLink} to="/portfolio-react/myskills" >My Skills</NavLink>
                    </li> */}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar