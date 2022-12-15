import React from 'react';

// helpers
import { projects } from '../../../helpers/projectsList.js';

// styles
import "./ProjectsPage.css"

// components
import Project from '../../../components/Project/Project';

const ProjectsPage = () => {
  return (
    <div>
       <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                {projects.map((project, id) => {
                    return <Project 
                        key={project.id}
                        title={project.title}
                        img={project.img}
                        id={id}
                    />;
                })}
            </ul>
        </div>
    </main>
    </div>
  )
}

export default ProjectsPage