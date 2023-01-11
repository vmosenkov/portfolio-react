import React from 'react'

// dependencies
import { NavLink} from 'react-router-dom'
import Tilt from 'react-tilt'

// styles
import './Project.css'

const Project = ({title, img, id, category}) => {
  return (
   <NavLink to={`/portfolio-react/project/${id}`}>
      <Tilt className="Tilt" options={{ max : 25, scale: 1.1, perspective: 1000, speed: 1000, transition: true,}}>
         <li className="project">
         <div className="Tilt-inner">
            <img 
               src={img}
               alt={title}
               className="project__img"
            />
            </div>
            <div className="Tilt-inner"><h3 className="project__title">{title}</h3></div>
            <div className="Tilt-inner"><p className="project__desc">Project: {category}</p></div>
            
         </li>
      </Tilt>
   </NavLink>
  )
}

export default Project