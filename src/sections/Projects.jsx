import React from 'react'
import Project from '../components/Project.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

export default function Projects() {
    return (
        <>
            <SectionTitle>Projects</SectionTitle>
            <div className="flex flex-wrap justify-around">

                <Project>Birds</Project>
                <Project>Blackjack</Project>
                <Project>ANDIE</Project>
                <Project>This Website</Project>
            </div>
        </>
    )
}
