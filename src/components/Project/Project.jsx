import React from 'react'
import cl from './Project.module.css'

const Project = ({title, img}) => {
  return (
   <li className={cl.project}>
      <a href="./project-page.html">
         <img 
            src={img}
            alt={title}
            className={cl.project__img}
         />
         <h3 className={cl.project__title}>{title}</h3>
      </a>
   </li>
  )
}

export default Project