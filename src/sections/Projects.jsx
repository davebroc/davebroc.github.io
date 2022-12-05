import React from 'react'
import ProjectItem from '../components/ProjectItem.jsx'
import projects from '../data/projects.js'
import SectionTitle from '../components/SectionTitle.jsx'

export default function Projects() {
    return (
        <section id='projects' className='scroll-mt-18 sm:scroll-mt-16'>
            <SectionTitle>Projects</SectionTitle>
            <div className="flex flex-wrap gap-x-5 justify-around">

                {projects.map(project => (
                    <ProjectItem
                        imgURL={project.imgURL}
                        skills={project.skills}
                        live={project.live}
                        repo={project.repo}
                        description={project.description}
                    >{project.title}</ProjectItem>
                ))}


            </div>
        </section>
    )
}
