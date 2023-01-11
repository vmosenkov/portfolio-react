import React from 'react'

// dependencies
import Tilt from 'react-tilt'

import './../../SkillsCard.css'

import logoCapCut from './logo-capcut.png'

const CapCutSkillCard = () => {
  return (
   <li>
      <Tilt className="Tilt" options={{ max : 45, scale: 1.2, perspective: 1000, speed: 1000, transition: true,}}>
         <div className="skillCard">
            <img className="skillCard-icon" src={logoCapCut} alt="logo react" type="image/svg+xml"/>
            <div className="skillCard-name">CapCut</div>
         </div>
      </Tilt>
   </li>
  )
}

export default CapCutSkillCard