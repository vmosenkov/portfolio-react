import React from 'react'

import cl from "./Header.module.css"
import ABtn from '../UI/Buttons/A_Btn_Header/ABtn';



const Header = () => {
  return (
   <header className={cl.header}>
      <div className={cl.header__wrapper}>
         <h1 className={cl.header__title}>
            <strong>
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/waving-hand_1f44b.png" srcset="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/waving-hand_1f44b.png 2x" alt="Waving Hand on Microsoft Teams 1.0" width="64" height="64"/>
                  Hi, my name is <em>Vladislav</em></strong><br/>
                  a frontend developer
         </h1>
         <div className={cl.header__text}>
            <p>with passion for learning and creating.</p>
         </div>
         <ABtn href="#!">Download CV</ABtn>
      </div>
   </header>
  )
}

export default Header