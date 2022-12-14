import React from 'react'

import cl from "./Navbar.module.css"

// icons - themes
import sun from "./img/icons/sun.svg";
import moon from "./img/icons/moon.svg";

// labels
import vmosenkovLabel_white from "./img/label/vmosenkovLabel_white.png";
import vmosenkovLabel_black from "./img/label/vmosenkovLabel_black.png";

const Navbar = () => {
  return (
    <nav className={cl.nav}>
        <div className="container">
            <div className={cl.nav_row}>
                <a href="./index.html" className={cl.logo}>
                    <img src={vmosenkovLabel_white} alt="Light mode" className="dark-mode-btn__icon" />
                    <strong></strong>
                    portfolio
                </a>

                <button className="dark-mode-btn">
                    <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
                    <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
                </button>

                <ul className={cl.nav_list}>
                    <li className={cl.nav_list__item}><a href="./index.html" className={cl.nav_list__link}>Home</a></li>
                    <li className={cl.nav_list__item}><a href="./projects.html" className={cl.nav_list__link}>Projects</a></li>
                    <li className={cl.nav_list__item}><a href="./contacts.html" className={cl.nav_list__link}>Contacts</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar