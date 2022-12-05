import React from 'react'
import SectionTitle from '../components/SectionTitle'
import Skill from '../components/Skill.jsx'

export default function Skills() {
    return (
        <section id='skills'>
            <SectionTitle>Skills</SectionTitle>
            <div className="flex flex-wrap justify-around">

                <Skill>React</Skill>
                <Skill>CSS</Skill>
                <Skill>HTML</Skill>
                <Skill>JS</Skill>
                <Skill>Java</Skill>
                <Skill>Python</Skill>
                <Skill>Data Science</Skill>
                <Skill>Jupyter Lab</Skill>
                <Skill>Unsupervised Learning</Skill>
                <Skill>Supervised Learning</Skill>
            </div>
        </section>
    )
}
