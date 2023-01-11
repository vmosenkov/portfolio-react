import React from 'react'

// dependencies
import Tilt from 'react-tilt'

import logoReactRouterLight from './logo-react_router-light.png'

const ReactRouterSkillCard = () => {
  return (
   <li>
      <Tilt className="Tilt" options={{ max : 45, scale: 1.2, perspective: 1000, speed: 1000, transition: true,}}>
        <div className="skillCard">
         <img className="skillCard-icon" src={logoReactRouterLight} alt="logo react" type="image/svg+xml"/>
         <div className="skillCard-name">React Router</div>
        </div>
      </Tilt>
   </li>
  )
}

export default ReactRouterSkillCard