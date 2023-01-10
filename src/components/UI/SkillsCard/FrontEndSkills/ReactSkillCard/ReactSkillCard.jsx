import React from 'react'

// dependencies
import Tilt from 'react-tilt'

import './../../SkillsCard.css'

import logoReact from './logo-react.svg'

const ReactSkillCard = () => {
  return (
   <li>
      <Tilt className="Tilt" options={{ max : 45, scale: 1.2, perspective: 1000, speed: 1000, transition: true,}}>
         <div className="skillCard">
            <img className="skillCard-icon" src={logoReact} alt="logo react" />
            <div className="skillCard-name">React</div>
         </div>
      </Tilt>
   </li>
  )
}

export default ReactSkillCard