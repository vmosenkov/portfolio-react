import React from 'react'

// dependencies
import Tilt from 'react-tilt'

import './../../SkillsCard.css'

import logoJS from './logo-js.svg'

const JavaScriptSkillCard = () => {
  return (
   <li>
      <Tilt className="Tilt" options={{ max : 45, scale: 1.2, perspective: 1000, speed: 1000, transition: true,}}>
        <div className="skillCard">
            <img className="skillCard-icon" src={logoJS} alt="logo react" />
            <div className="skillCard-name">JavaScript</div>
        </div>
      </Tilt>
   </li>
  )
}

export default JavaScriptSkillCard