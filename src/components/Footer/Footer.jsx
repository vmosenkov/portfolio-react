import React from 'react';

// styles
import "./Footer.css";

// icons - social buttons
import vk from "./icons/vk.svg";
import instagram from "./icons/instagram.svg";
import twitter from "./icons/twitter.svg";
import gitHub from "./icons/gitHub.svg";
import linkedIn from "./icons/linkedIn.svg";

const Footer = () => {
  return (
   <footer className="footer">
      <div className="container">
         <div className="footer__wrapper">
            <ul className="social">
               <li className="social__item"><a href="#!"><img src={vk} alt="Link"/></a></li>
               <li className="social__item"><a href="#!"><img src={instagram} alt="Link"/></a></li>
               <li className="social__item"><a href="#!"><img src={twitter} alt="Link"/></a></li>
               <li className="social__item"><a href="#!"><img src={gitHub} alt="Link"/></a></li>
               <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link"/></a></li>
            </ul>
            <div className="copyright">
               <p>©</p>
            </div>
         </div>
      </div>
   </footer>
  )
}

export default Footer