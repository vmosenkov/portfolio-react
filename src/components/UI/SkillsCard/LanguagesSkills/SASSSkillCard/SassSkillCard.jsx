import React from 'react'

// dependencies
import Tilt from 'react-tilt'

import './../../SkillsCard.css'

import logoSASS from './logo-SASS.svg'

const SassSkillCard = () => {
  return (
   <li>
      <Tilt className="Tilt" options={{ max : 45, scale: 1.2, perspective: 1000, speed: 1000, transition: true,}}>
        <div className="skillCard">
         <img className="skillCard-icon" src={logoSASS} alt="logo react" />
         <div className="skillCard-name">SASS</div>
        </div>
      </Tilt>
   </li>
  )
}

export default SassSkillCard