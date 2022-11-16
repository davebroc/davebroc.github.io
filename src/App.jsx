import { useState } from 'react'
// import './App.scss'
import Navbar from './styles/components/Sidebar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
    </>
  )
}

export default App
