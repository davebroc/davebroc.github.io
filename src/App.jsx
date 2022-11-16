import { useState } from 'react'
// import './App.scss'
import Sidebar from './styles/components/Sidebar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar></Sidebar>
    </>
  )
}

export default App
