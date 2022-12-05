import React from 'react'
import SectionTitle from '../components/SectionTitle.jsx'

export default function Welcome() {
    return (
        <header className="flex justify-center items-center text-center bg-hero bg-cover bg-center h-96 md:h-screen bg-neutral-500" >
            <div className=''>

                <h2 className="bg-opacity-50 text-6xl font-bold block">
                    Hi, I'm David
                </h2>
                <h3 className="bg-opacity-50 mt-10 text-4xl font-bold block">
                    Software developer
                </h3>
            </div>
        </header>
    )
}
