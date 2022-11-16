import React from 'react'

export default function SectionTitle({ children, id }) {
    return (
        <h1 id={id && id} className='text-2xl my-5'>{children}</h1>
    )
}
