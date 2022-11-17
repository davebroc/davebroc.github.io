import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import About from './sections/About.jsx'
import Welcome from './sections/Welcome.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'

function App() {

  return (
    <div className="text-gray-200 bg-slate-800 flex-col h-max pb-96">

      <Navbar></Navbar>
      <Welcome></Welcome>
      <div className="max-w-5xl mx-auto w-11/12 " >
        <About></About>
        {/* <Skills></Skills> */}
        <Projects></Projects>
        <Contact></Contact>

      </div>



    </div>

  )
}

export default App
