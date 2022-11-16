import React from 'react'

export default function Project({ children, id }) {
    return (
        <div className="flex text-center justify-center items-center my-4 h-64 w-64 inline-block bg-green-700">
            <h1 id={id && id} className='text-2xl m-0 p-0'>{children}</h1>
        </div>
    )
}
