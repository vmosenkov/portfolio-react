import React from 'react'

// dependencies
import Tilt from 'react-tilt'

import logoAxios from './logo-axios.svg'

const AxiosSkillCard = () => {
  return (
   <li>
      <Tilt className="Tilt" options={{ max : 45, scale: 1.2, perspective: 1000, speed: 1000, transition: true,}}>
        <div className="skillCard">
         <img className="skillCard-icon" src={logoAxios} alt="logo react" />
         <div className="skillCard-name">Axios</div>
        </div>
      </Tilt>
   </li>
  )
}

export default AxiosSkillCard