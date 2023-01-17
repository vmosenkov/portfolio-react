import React from 'react';

// dependencies - icon
import { BsInstagram, BsTelegram, /* BsTwitter */ BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaArtstation } from 'react-icons/fa';

// styles
import "./footer.scss";

// icons - social buttons
import vk from "./icons/vk.svg";

const Footer = () => {
  return (
   <footer className="footer">
      <div className="container">
         <div className="footer__wrapper">
            <ul className="social">
               {/* vk */}

               <li className="social__item">
                  <a href="https://vk.com/vmosenkov"
                     rel="noreferrer"
                     target="_blank"
                     aria-label="Link to vk">
                     <img src={vk} type="image/svg+xml" aria-label="Link to vk"/>
                  </a>
               </li>

               {/* instagram */}

               <li className="social__item">
                  <a href="https://www.instagram.com/v.mosenkov/"
                     rel="noreferrer"
                     target="_blank"
                     aria-label="Link to instagram">
                     <BsInstagram className="social__icons" />
                  </a>
               </li>

               {/* tg */}

               <li className="social__item">
                  <a href="https://t.me/vmosenkov"
                     rel="noreferrer"
                     target="_blank"
                     aria-label="Link to tg">
                     <BsTelegram className="social__icons" />
                  </a>
               </li>

               {/* github */}

               <li className="social__item">
                  <a href="https://github.com/vmosenkov"
                     rel="noreferrer"
                     target="_blank"
                     aria-label="Link to github">
                     <BsGithub className="social__icons" />
                  </a>
               </li>

               {/* linkedin */}

               <li className="social__item">
                  <a href="https://www.linkedin.com/in/vmosenkov/"
                     rel="noreferrer"
                     target="_blank"
                     aria-label="Link to linkedin">
                     <BsLinkedin className="social__icons" />
                  </a>
               </li>

               {/* artstation */}

               <li className="social__item">
                  <a href="https://www.artstation.com/vmosenkov"
                     rel="noreferrer"
                     target="_blank"
                     aria-label="Link to artstation">
                     <FaArtstation className="social__icons" />
                  </a>
               </li>
            </ul>

            {/* copyright */}

            <div className="copyright">
               <p>©2022 Vladislav Mosenkov</p>
            </div>
         </div>
      </div>
   </footer>
  )
}

export default Footer