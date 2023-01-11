import React from 'react'

// dependencies
import Tilt from 'react-tilt'

import logoNormalize from './logo-normalize.svg'

const NormalizeSkillCard = () => {
  return (
   <li>
      <Tilt className="Tilt" options={{ max : 45, scale: 1.2, perspective: 1000, speed: 1000, transition: true,}}>
        <div className="skillCard">
         <img className="skillCard-icon" src={logoNormalize} alt="logo react"/>
         <div className="skillCard-name">Normalize.css</div>
        </div>
      </Tilt>
   </li>
  )
}

export default NormalizeSkillCard