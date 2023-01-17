import React from 'react'

// dependencies
import Tilt from 'react-tilt'

import './../../skillsCard.scss'

import logoBootstrap from './logo-bootstrap.svg'

const BootstrapSkillCard = () => {
  return (
   <li>
      <Tilt className="Tilt" options={{ max : 45, scale: 1.2, perspective: 1000, speed: 1000, transition: true,}}>
         <div className="skillCard">
            <img className="skillCard__icon" src={logoBootstrap} alt="logo react" type="image/svg+xml"/>
            <div className="skillCard__name">Bootstrap</div>
         </div>
      </Tilt>
   </li>
  )
}

export default BootstrapSkillCard