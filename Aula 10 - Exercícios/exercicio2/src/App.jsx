import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
//   2. Temporizador regressivo
//  Input para o usuário digitar um número (em segundos).
//  Botão Iniciar começa a contagem regressiva.
//  Quando chegar em 0, exibir “⏰ Tempo esgotado!”.

  const [num, setNum] = useState(0)

  useEffect(() => {
    // Atualiza a cada segundo
    const intervalo = setInterval(() => {
      setNum(num -1);
    }, 1000);""
  }, []); 

  return (
    <>
      <span className='titulo'>Temporizador regressivo</span>
      <br /><br />
      <input type="text" placeholder='Digite um número:' onChange={(e) => setNum(e.target.value)} />
      <br /><br />
      <button className='button' onClick={useEffect}>Iniciar</button>
    </>
  )
}

export default App
