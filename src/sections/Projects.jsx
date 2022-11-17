import React from 'react'
import ProjectItem from '../components/ProjectItem.jsx'
import projects from '../data/projects.js'
import SectionTitle from '../components/SectionTitle.jsx'

export default function Projects() {
    return (
        <>
            <SectionTitle>Projects</SectionTitle>
            <div className="flex flex-wrap justify-around">

                {projects.map(project => (
                    <ProjectItem description={project.description} skills={project.skills} imgURL={project.imgURL}>{project.title}</ProjectItem>
                ))}

                {/* <ProjectItem>Birds</ProjectItem>
                <ProjectItem>Blackjack</ProjectItem>
                <ProjectItem>ANDIE</ProjectItem>
                <ProjectItem>This Website</ProjectItem> */}
            </div>
        </>
    )
}
