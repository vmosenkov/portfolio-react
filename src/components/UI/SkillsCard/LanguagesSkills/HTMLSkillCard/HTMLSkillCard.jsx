import React from 'react'

// dependencies
import Tilt from 'react-tilt'

import './../../skillsCard.scss'

import logoHTML from './logo-html_5.svg'

const HTMLSkillCard = () => {
  return ( 
   <li>
      <Tilt className="Tilt" options={{ max : 45, scale: 1.2, perspective: 1000, speed: 1000, transition: true,}}>
        <div className="skillCard">
          <img className="skillCard__icon" src={logoHTML} alt="logo HTML" type="image/svg+xml"/>
          <div className="skillCard__name">HTML</div>
        </div>
      </Tilt>
   </li>
  )
}

export default HTMLSkillCard