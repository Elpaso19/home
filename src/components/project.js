import React from "react";
import './project.css'

function Projects() {
    const projects=[
        {
            title:"Project 1",
            description:"lorem",
            demoLinK:"https://example.com/project1",
            githublink:'https://github.com/example/project1',
        },
        {
            title:"Project 2",
            description:"lorem",
            demoLinK:"https://example.com/project1",
            githublink:'https://github.com/example/project1',
        },
        {
            title:"Project 3",
            description:"lorem",
            demoLinK:"https://example.com/project1",
            githublink:'https://github.com/example/project1',
        },
    ]
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-lists">
                {projects.map((project,index)=>(
                    <div className="project" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-links">
                            <a href={project.demoLinK}>Live Demo</a>
                            <a href={project.githublink}>Github</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Projects;