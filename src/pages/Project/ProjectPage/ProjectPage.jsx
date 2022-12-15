import React from 'react';

// dependencies
import { useParams } from 'react-router-dom';

// helpers
import { projects } from '../../../helpers/projectsList.js';

// styles
import "./ProjectPage.css"

// components
import ABtnGitHub from '../../../components/UI/Buttons/A_Btn_GitHub/ABtnGitHub';


const ProjectPage = () => {
    const { id } = useParams();
    const project = projects[id];
   return (
      <main className="section">
         <div className="container">
            <div className="project-details">
               <h1 className="title-1">{project.title}</h1>

               <img src={project.imgBig} alt={project.title} className="project-details__cover" />

               <div className="project-details__desc">
                  <p>{project.skills}</p>
               </div>
               
               {project.gitHubLink && (
                  <ABtnGitHub link="http://github.com/"/>
               )}
               
            </div>
         </div>
      </main>
   )
}

export default ProjectPage