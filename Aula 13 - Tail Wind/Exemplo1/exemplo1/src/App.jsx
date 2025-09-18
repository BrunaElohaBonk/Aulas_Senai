import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-blue-500 text-6xl'>Testando Tailwind</h1> {/*Estilizando o texto*/}
      <div className='h-screen flex justify-center items-center'> {/* Estou centralizando essa div */}
        <div className='w-52 h-52 bg-emerald-600'></div> 
      </div>
    </>
  )
}

export default App
