import React from 'react'

// dependencies
import Tilt from 'react-tilt'

import './../../skillsCard.scss'

import logoTailwindCSS from './logo-TailwindCSS.svg'

const TailwindCSSSkillCard = () => {
  return (
   <li>
      <Tilt className="Tilt" options={{ max : 45, scale: 1.2, perspective: 1000, speed: 1000, transition: true,}}>
         <div className="skillCard">
            <img className="skillCard__icon" src={logoTailwindCSS} alt="logo react" type="image/svg+xml"/>
            <div className="skillCard__name">TailwindCSS</div>
         </div>
      </Tilt>
   </li>
  )
}

export default TailwindCSSSkillCard