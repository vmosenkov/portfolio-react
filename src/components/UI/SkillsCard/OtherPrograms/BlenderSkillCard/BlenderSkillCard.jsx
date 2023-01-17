import React from 'react'

// dependencies
import Tilt from 'react-tilt'

import './../../skillsCard.scss'

import logoBlender from './logo-blender.svg'

const BlenderSkillCard = () => {
  return (
   <li>
      <Tilt className="Tilt" options={{ max : 45, scale: 1.2, perspective: 1000, speed: 1000, transition: true,}}>
         <div className="skillCard">
            <img className="skillCard__icon" src={logoBlender} alt="logo react" type="image/svg+xml"/>
            <div className="skillCard__name">Blender</div>
         </div>
      </Tilt>
   </li>
  )
}

export default BlenderSkillCard