import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [contador, setContador] = useState(0)

  const [texto, setTexto] = useState("")

  const [visivel, setVisivel] = useState(true)
  
  function somar() {
    setContador(contador + 1)
  }
  
  function subtrair() {
    setContador(contador - 1)
  }

  const alterarVisibilidade = () => {
    setVisivel(!visivel)
  }
  
  return (
    <>
      {/* A – Contador com dois botões: um de incrementar 1 e outro de decrementar 1. Exiba o resultado atualizado. */}
      <span className='titulo'>Contador</span>
      <br /><br />
      <button onClick={subtrair} className='button'>-</button>
      <button onClick={somar} className='button'>+</button>
      <br /><br />
      <span>O contador agora está em {contador}</span>
      <br /><br />
      <span>-------------------------------------------------------------------------------</span>
      <br /><br />
      <input 
        type="text" 
        placeholder='Digite aqui: '
        onChange={(e) => setTexto(e.target.value)} 
      />
      <br />
      <span>{texto && `${texto}`}</span>
      <br /><br />
      <span>-------------------------------------------------------------------------------</span>
      <br /><br />
      <button onClick={alterarVisibilidade} className='button'>Alterar visibilidade</button>
      <br />
      {visivel &&
        <span>
          O rato roeu a roupa do rei de roma.
          <br />
          Like a Bosch
        </span>
      }
    </>
  )
}

export default App
