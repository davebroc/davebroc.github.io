import React from 'react'

export default function SkillCategory({ text, children, id }) {

    {
        children.map(skillItem => (
            <ProjectItem
                imgURL={project.imgURL}
                skills={project.skills}
                live={project.live}
                repo={project.repo}
                description={project.description}
            >{project.title}</ProjectItem>
        ))
    }



    return (
        <button className="flex text-center justify-center items-center p-0 m-4 rounded-full h-24 w-24 inline-block bg-fuchsia-700">
            <h2 id={id && id} className='text-2xl m-0 p-0'>{text}</h2>

        </button>

    )
}
