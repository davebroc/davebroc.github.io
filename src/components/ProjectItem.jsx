import React from 'react'
import Skill from './Skill.jsx'

export default function ProjectItem({ children, id, skills, imgURL, live, repo, description }) {
    return (
        <div className="my-4 h-96 w-104 rounded-lg overflow-hidden relative  bg-slate-600">
            <img src={imgURL} alt={children} className='w-full h-1/2 object-cover object-top' />

            <div className='w-11/12 m-auto '>
                <h1 id={id && id} className='text-2xl py-3'>{children}</h1>
                <p>{description}</p>

                <div className='flex gap-4 absolute bottom-4' >
                    {skills.map(skill => (<p className='p-2 bg-slate-700 rounded-md'>{skill}</p>))}
                </div>

            </div>

        </div>
    )
}
