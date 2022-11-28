import React from 'react'
import SectionTitle from '../components/SectionTitle.jsx'

export default function Welcome() {
    return (
        <header className="relative bg-hero bg-cover bg-center h-96 md:h-screen bg-neutral-500" >
            <div className='absolute top-1/2 text-center left-1/2 -translate-xy-half'>
                {/* position: absolute; */}
                {/* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */}
                <h2 className="bg-opacity-50 text-2xl font-bold block">
                    Hi, I'm David
                </h2>
                <h3 className="bg-opacity-50  text-2xl font-bold block">
                    Software developer
                </h3>
            </div>
        </header>
    )
}
