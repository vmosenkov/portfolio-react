import React from 'react'

// dependencies
import Tilt from 'react-tilt'

import logoNodeJS from './logo-nodejs.svg'

const NodeJSSkillCard = () => {
  return (
   <li>
      <Tilt className="Tilt" options={{ max : 45, scale: 1.2, perspective: 1000, speed: 1000, transition: true,}}>
        <div className="skillCard">
         <img className="skillCard-icon" src={logoNodeJS} alt="logo react" />
         <div className="skillCard-name">NodeJS</div>
        </div>
      </Tilt>
   </li>
  )
}

export default NodeJSSkillCard