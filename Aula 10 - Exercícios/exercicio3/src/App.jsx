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
      <button onClick={somar} className='button'>Adicionar 1</button>
      <button onClick={subtrair} className='button'>Diminuir 1</button>
      <br /><br />
      <span>O contador agora está em {contador}</span>
    </>
  )
}

export default App