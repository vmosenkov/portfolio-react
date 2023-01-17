import React from 'react';

// helpers
import { projects } from '../../../helpers/projectsList.js';

// styles
import "./projectsPage.scss"

// components
import Project from '../../../components/Project/Project';

const ProjectsPage = () => {
  return (
    <div>
       <main className="section">
        <div className="container">
            <h2 className="title-1">Web Development Projects</h2>
            <ul className="projects">
                {projects.map((project, id) => {
                    return <Project 
                        key={project.id}
                        title={project.project[0].title}
                        img={project.project[0].img}
                        id={id}
                        category={project.project[0].category}
                    />;
                })}
            </ul>
        </div>
    </main>
    </div>
  )
}

export default ProjectsPage