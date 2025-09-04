import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 5. Pisca-pisca
// Criar uma <div> que muda de cor a cada 1 segundo.
// Alternar entre duas cores (ex.: vermelho ↔ azul).

function App() {
  const [cor, setCor] = useState("green")

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCor(corAnterior => corAnterior === "green" ? "black" : "green")
    }, 1000)

    // Limpa o intervalo quando o componente desmontar
    return () => clearInterval(intervalo)
  }, []) // array vazio garante que rode só uma vez

  return (
    <>
      <span className='titulo'>Pisca-pisca</span>
      <div style={{ backgroundColor: cor, padding: "40px", marginTop: "20px", width: "50px", height: "50px" }}></div>
    </>
  )
}

export default App
