import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen">
        <div className="h-1/3 flex justify-between">
          <div className="w-52 h-52 bg-blue-500">
            <div className="h-1/3 flex justify-center bg-amber-500 w-18"></div>
            <div className="h-1/3"></div>
            <div className="h-1/3"></div>
          </div>
          <div className="w-52 h-52 bg-blue-500"></div>
          <div className="w-52 h-52 bg-blue-500"></div>
          <div className="w-52 h-52 bg-blue-500"></div>
        </div>
        <div className="h-1/3 flex justify-between">
          <div className="w-52 h-52 bg-blue-500"></div>
          <div className="w-52 h-52 bg-blue-500"></div>
          <div className="w-52 h-52 bg-blue-500"></div>
        </div>
        <div className="h-1/3 flex justify-between">
          <div className="w-52 h-52 bg-blue-500"></div>
          <div className="w-52 h-52 bg-blue-500"></div>
          <div className="w-52 h-52 bg-blue-500"></div>
        </div>
      </div>
    </>
  )
}

export default App
