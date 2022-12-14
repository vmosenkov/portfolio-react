import React from 'react'
import Project from '../components/Project/Project'
import { projects } from './../helpers/projectsList.js'

const ProjectsPage = () => {
  return (
    <div>
       <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                {projects.map((project) => {
                    return <Project 
                        key={project.id}
                        title={project.title}
                        img={project.img}
                    />;
                })}
            </ul>
        </div>
    </main>
    </div>
  )
}

export default ProjectsPage