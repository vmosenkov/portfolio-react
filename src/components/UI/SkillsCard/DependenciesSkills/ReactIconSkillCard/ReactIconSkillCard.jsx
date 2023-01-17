import React from 'react'

// dependencies
import Tilt from 'react-tilt'

import logoReactIcon from './logo-react_icons.svg'

const ReactIconSkillCard = () => {
  return (
   <li>
      <Tilt className="Tilt" options={{ max : 45, scale: 1.2, perspective: 1000, speed: 1000, transition: true,}}>
        <div className="skillCard">
         <img className="skillCard__icon" src={logoReactIcon} alt="logo react" type="image/svg+xml"/>
         <div className="skillCard__name">React-icon</div>
        </div>
      </Tilt>
   </li>
  )
}

export default ReactIconSkillCard