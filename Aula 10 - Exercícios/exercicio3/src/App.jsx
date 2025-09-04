import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//   3. Contador com efeito colateral
//  Criar um contador com botões + e -.
//  Mostrar no console (ou na tela) toda vez que o valor mudar:
//  "O contador agora está em X".

  const [contador, setContador] = useState(0)

  function somar() {
    setContador(contador + 1)
  }

  function subtrair() {
    setContador(contador - 1)
  }

  return (
    <>
      <span className='titulo'>Contador com efeito colateral</span>
      <br /><br />
      <button onClick={subtrair} className='button'>-</button>
      <button onClick={somar} className='button'>+</button>
      <br /><br />
      <span>O contador agora está em {contador}</span>
    </>
  )
}

export default App