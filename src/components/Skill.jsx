import React from 'react'

export default function Skill({ children, id }) {
    return (
        <div className="flex text-center justify-center items-center p-0 m-4 rounded-full h-24 w-24 inline-block bg-fuchsia-700">
            <h1 id={id && id} className='text-2xl m-0 p-0'>{children}</h1>
        </div>

    )
}
