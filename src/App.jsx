import { useState } from 'react'
import Navbar from './components/Sidebar.jsx'
import About from './sections/About.jsx'
import Welcome from './sections/Welcome.jsx'
import Skills from './sections/Skills.jsx'

function App() {

  return (
    <div className="text-gray-200 bg-slate-800 flex-col h-max pb-32">

      <Navbar></Navbar>
      <Welcome></Welcome>
      <div className="max-w-5xl mx-auto w-11/12 " >
        <Skills></Skills>
        <About></About>



      </div>



    </div>

  )
}

export default App
