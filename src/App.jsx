import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import About from './sections/About.jsx'
import Welcome from './sections/Welcome.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

function App() {

  return (
    <div className="relative text-gray-200 bg-slate-800 flex-col h-max pb-48">

      <Navbar></Navbar>
      <Welcome></Welcome>
      <div className="max-w-5xl mx-auto w-11/12 " >
        <About></About>
        {/* <Skills></Skills> */}
        <Projects></Projects>
        <Contact></Contact>

      </div>
      <Footer></Footer>



    </div>

  )
}

export default App
