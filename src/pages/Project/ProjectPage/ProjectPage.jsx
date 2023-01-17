import React from 'react';

// dependencies
import { useParams } from 'react-router-dom';

// helpers
import { projects } from '../../../helpers/projectsList.js';

// styles
import "./projectPage.scss"

// components
import { BsGithub } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import MyABtn from '../../../components/UI/Buttons/MyABtn/MyABtn.jsx';


const ProjectPage = () => {
    const { id } = useParams();
    const project = projects[id];
   return (
      <main className="section">
         <div className="container">
            <div className="project-details">
               <h1 className="title-1 theme__color">{project.project[0].title}</h1>

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
                  
               <div className="skills__box">
                  <div className="skills__title">Frontend skills:</div>
                  <ul className="skills__row">
                     {project.project[0].skills.skillsFrontend}
                  </ul>
               </div>

               {project.project[0].skills.skillsBackend && (
               <div className="skills__box">
                  <div className="skills__title">Backend skills:</div>
                  <ul className="skills__row">
                  {project.project[0].skills.skillsBackend}
                  </ul>
               </div>
               )}
               {project.project[0].skills.skillsDependencies && (
               <div className="skills__box">
                  <div className="skills__title">Dependencies:</div>
                  <ul className="skills__row">
                     {project.project[0].skills.skillsDependencies}
                  </ul>
               </div>
               )}
            </div>
            <div className="project-works__links">
               {/* 
               {project.project[0].liveSiteLink && (
                  <ABtnLiveSite link={project.project[0].liveSiteLink}/>
               )} */}
               {project.project[0].gitHubLink && (
                  <MyABtn link={project.project[0].gitHubLink}>
                     <BsGithub size={24}/>
                     GitHub repo
                  </MyABtn>
               )}
               {project.project[0].gitHubLink && (
                  <MyABtn link={project.project[0].liveSiteLink}>
                     <CgWebsite size={24}/>
                     GitHub repo
                  </MyABtn>
               )}
            </div>
         </div>
      </main>
   )
}

export default ProjectPage