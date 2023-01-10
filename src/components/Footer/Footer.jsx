import React from 'react';

// dependencies - icon
import { BsInstagram } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';
/* import { BsTwitter } from 'react-icons/bs'; */
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { FaArtstation } from 'react-icons/fa';

// styles
import "./Footer.css";

// icons - social buttons
import vk from "./icons/vk.svg";

const Footer = () => {
  return (
   <footer className="footer">
      <div className="container">
         <div className="footer__wrapper">
            <ul className="social">
               <li className="social__item"><a href="https://vk.com/vmosenkov" rel="noreferrer" target="_blank"><img src={vk} alt="Link"/></a></li>
               <li className="social__item"><a href="https://www.instagram.com/v.mosenkov/" rel="noreferrer" target="_blank"><BsInstagram className="social__icons" /></a></li>
               <li className="social__item"><a href="https://t.me/vmosenkov" rel="noreferrer" target="_blank"><BsTelegram className="social__icons" /></a></li>
               {/* <li className="social__item"><a href="#!" rel="noreferrer" target="_blank"><BsTwitter className="social__icons" /></a></li> */}
               <li className="social__item"><a href="https://github.com/vmosenkov" rel="noreferrer" target="_blank"><BsGithub className="social__icons" /></a></li>
               <li className="social__item"><a href="https://www.linkedin.com/in/vmosenkov/" rel="noreferrer" target="_blank"><BsLinkedin className="social__icons" /></a></li>
               <li className="social__item"><a href="https://www.artstation.com/vmosenkov" rel="noreferrer" target="_blank"><FaArtstation className="social__icons" /></a></li>
            </ul>
            <div className="copyright">
               <p>©2022 Vladislav Mosenkov</p>
            </div>
            
         </div>
         
      </div>
   </footer>
  )
}

export default Footer