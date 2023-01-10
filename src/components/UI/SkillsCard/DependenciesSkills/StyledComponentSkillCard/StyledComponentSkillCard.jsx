import React from 'react'

// dependencies
import Tilt from 'react-tilt'

import logoStyledComponents from './logo-styled_components.png'

const StyledComponentSkillCard = () => {
  return (
   <li>
      <Tilt className="Tilt" options={{ max : 45, scale: 1.2, perspective: 1000, speed: 1000, transition: true,}}>
        <div className="skillCard">
         <img className="skillCard-icon" src={logoStyledComponents} alt="logo react" />
         <div className="skillCard-name">Styled component</div>
        </div>
      </Tilt>
   </li>
  )
}

export default StyledComponentSkillCard