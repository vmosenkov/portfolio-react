import React from 'react'

import cl from "./Footer.module.css";

// icons - social buttons
import vk from "./icons/vk.svg";
import instagram from "./icons/instagram.svg";
import twitter from "./icons/twitter.svg";
import gitHub from "./icons/gitHub.svg";
import linkedIn from "./icons/linkedIn.svg";

const Footer = () => {
  return (
   <footer className={cl.footer}>
      <div className={cl.container}>
         <div className={cl.footer__wrapper}>
            <ul className={cl.social}>
                  <li className={cl.social__item}><a href="#!"><img src={vk} alt="Link"/></a></li>
                  <li className={cl.social__item}><a href="#!"><img src={instagram} alt="Link"/></a></li>
                  <li className={cl.social__item}><a href="#!"><img src={twitter} alt="Link"/></a></li>
                  <li className={cl.social__item}><a href="#!"><img src={gitHub} alt="Link"/></a></li>
                  <li className={cl.social__item}><a href="#!"><img src={linkedIn} alt="Link"/></a></li>
            </ul>
            <div className={cl.copyright}>
                  <p>©</p>
            </div>
         </div>
      </div>
   </footer>
  )
}

export default Footer