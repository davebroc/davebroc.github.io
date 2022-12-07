import React from 'react'

export default function SkillItem({ children, id }) {
    return (
        <div className="flex text-center justify-center items-center p-2 m-4 rounded-md  bg-fuchsia-700">
            {children}
        </div>

    )
}
