import React from 'react'

// dependencies
import Tilt from 'react-tilt'

import './../../SkillsCard.css'

import logoGit from './logo-git.svg'

const GitSkillCard = () => {
  return (
   <li>
      <Tilt className="Tilt" options={{ max : 45, scale: 1.2, perspective: 1000, speed: 1000, transition: true,}}>
         <div className="skillCard">
            <img className="skillCard-icon" src={logoGit} alt="logo react" type="image/svg+xml"/>
            <div className="skillCard-name">Git</div>
         </div>
      </Tilt>
   </li>
  )
}

export default GitSkillCard