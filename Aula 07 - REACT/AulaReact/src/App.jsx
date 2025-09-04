import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Square } from './componentes/Square'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Square classe="blue"/> {/* flecha */}
      <Square classe="red"/>
      <Square classe="yellow"/>
    </>
  )
}

export default App
