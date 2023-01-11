import React from 'react'

// dependencies
import Tilt from 'react-tilt'

import './../../SkillsCard.css'

import logoTailwindCSS from './logo-TailwindCSS.svg'

const TailwindCSSSkillCard = () => {
  return (
   <li>
      <Tilt className="Tilt" options={{ max : 45, scale: 1.2, perspective: 1000, speed: 1000, transition: true,}}>
         <div className="skillCard">
            <img className="skillCard-icon" src={logoTailwindCSS} alt="logo react" type="image/svg+xml"/>
            <div className="skillCard-name">TailwindCSS</div>
         </div>
      </Tilt>
   </li>
  )
}

export default TailwindCSSSkillCard