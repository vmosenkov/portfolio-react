import React from 'react';

// dependencies
import { useParams } from 'react-router-dom';

// helpers
import { projects } from '../../../helpers/projectsList.js';

// styles
import "./ProjectPage.css"

// components
import ABtnGitHub from '../../../components/UI/Buttons/A_Btn_GitHub/ABtnGitHub';
import ABtnLiveSite from '../../../components/UI/Buttons/A_Btn_LiveSite/ABtnLiveSite.jsx';


const ProjectPage = () => {
    const { id } = useParams();
    const project = projects[id];
   return (
      <main className="section">
         <div className="container">
            <div className="project-details">
               <h1 className="title-1">{project.project[0].title}</h1>

               <img src={project.project[0].imgBig} alt={project.project[0].title}className="project-details__cover" />

            </div>
            <div className="project-box">
               <div className="project-box__row">
                  <div className="project-box__title">Project:</div>
                  <div className="project-box__title-2">{project.project[0].category}</div>
               </div>

               <div className="project-box__title">Site description:</div>
               <div className="project-box__desc">{project.project[0].description}</div>
               
               <div className="project-box__title">
                  <p>Built with:</p>
               </div>
                  
               <div className="skills-box">
                  <div className="skills-title">Frontend skills:</div>
                  <ul className="skills-row">
                     {project.project[0].skills.skillsFrontend}
                  </ul>
               </div>

               {project.project[0].skills.skillsBackend && (
               <div className="skills-box">
                  <div className="skills-title">Backend skills:</div>
                  <ul className="skills-row">
                  {project.project[0].skills.skillsBackend}
                  </ul>
               </div>
               )}
               {project.project[0].skills.skillsDependencies && (
               <div className="skills-box">
                  <div className="skills-title">Dependencies:</div>
                  <ul className="skills-row">
                     {project.project[0].skills.skillsDependencies}
                  </ul>
               </div>
               )}
            </div>
            <div className="project-works_links">
               {project.project[0].gitHubLink && (
                  <ABtnGitHub link={project.project[0].gitHubLink}/>
               )}
               {project.project[0].liveSiteLink && (
                  <ABtnLiveSite link={project.project[0].liveSiteLink}/>
               )}
            </div>
         </div>
      </main>
   )
}

export default ProjectPage