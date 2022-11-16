import React from 'react'

export default function Project({ children, id }) {
    return (
        <div className="flex text-center my-4 h-96 w-96 inline-block bg-green-700">
            <h1 id={id && id} className='text-2xl m-0 p-0'>{children}</h1>
            <p>lorem ipsum ipsum amet irure </p>
        </div>
    )
}
