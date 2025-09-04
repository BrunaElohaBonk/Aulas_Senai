import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 6. Semáforo
// Três cores: vermelho, amarelo, verde.
// A cada 3 segundos, mudar para a próxima cor automaticamente.

function App() {
  const [cor, setCor] = useState("red")

  return (
    <>
      <div style={{borderRadius: "10px", height: "10px", height:"10px", backgroundColor:"cor"}}></div>
    </>
  )
}

export default App