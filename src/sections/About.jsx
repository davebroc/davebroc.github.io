import React from 'react'
import SectionTitle from '../components/SectionTitle.jsx'


export default function About() {
    return (
        <section id='about' className='scroll-mt-18 sm:scroll-mt-16'>
            <SectionTitle>About</SectionTitle>
            <p>Final year student at University of Otago studying Computer Science and Energy Science/Technology with
                <a className='underline' href='./academic-transcript.pdf' target='_blank'> excellent grades.</a>
            </p>
            <br></br>
            <p>
                During my studies, I have built front-end and back-end sections of a web application, worked cooperative in a team using Java to build a image editing program, and have basic experience with data science regression and classification modelling.
            </p>

            <br></br>
            <p>
                I have experience working in C, Python, Java, and JavaScript (React).
            </p>
        </section>
    )
}
