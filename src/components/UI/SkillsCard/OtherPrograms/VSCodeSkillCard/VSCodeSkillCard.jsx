import React from 'react'

// dependencies
import Tilt from 'react-tilt'

import './../../skillsCard.scss'

import logoVSCode from './VSCode.svg'

const VSCodeSkillCard = () => {
  return (
   <li>
      <Tilt className="Tilt" options={{ max : 45, scale: 1.2, perspective: 1000, speed: 1000, transition: true,}}>
         <div className="skillCard">
            <img className="skillCard__icon" src={logoVSCode} alt="logo react" type="image/svg+xml"/>
            <div className="skillCard__name">Visial Studio Code</div>
         </div>
      </Tilt>
   </li>
  )
}

export default VSCodeSkillCard
