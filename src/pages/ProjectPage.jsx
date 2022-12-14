import React from 'react'

import img from './../img/projects/02-big.jpg'
import ABtnGitHub from '../components/UI/Buttons/A_Btn_GitHub/ABtnGitHub'

const ProjectPage = () => {
   return (
      <main className="section">
         <div className="container">
            <div className="project-details">
               <h1 className="title-1">Video service</h1>

               <img src={img} alt="" className="project-details__cover" />

               <div className="project-details__desc">
                  <p>Skills: React, Node.js, MongoDB</p>
               </div>

               <ABtnGitHub link="http://github.com/"/>
            </div>
         </div>
      </main>
   )
}

export default ProjectPage