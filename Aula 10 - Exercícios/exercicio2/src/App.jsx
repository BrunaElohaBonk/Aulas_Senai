import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

//   2. Temporizador regressivo
//  Input para o usuário digitar um número (em segundos).
//  Botão Iniciar começa a contagem regressiva.
//  Quando chegar em 0, exibir “⏰ Tempo esgotado!”.

function App() {
  const [num, setNum] = useState(0)
  const [isRunning, setIsRunning] = useState(false) // estado que controla se o timer está ativo
  const [finished, setFinished] = useState(false)   // diz se o tempo acabou

  useEffect(() => {
    let intervalo;

    if (isRunning && num > 0) { // se o timer estiver ativo e num for maior que 0
      intervalo = setInterval(() => {
        setNum(prevNum => {
          if (prevNum <= 1) {
            clearInterval(intervalo)   // para o intervalo
            setIsRunning(false)         // timer para
            setFinished(true)           // marca que acabou
            return 0
          }
          return prevNum - 1            // prevNum significa: "Atualiza num para o valor anterior menos 1"
        })
      }, 1000)
    }

    // limpa o intervalo quando componente desmontar ou mudar dependências
    return () => clearInterval(intervalo)

  }, [isRunning, num])

  function iniciar() {
    if (num > 0) {
      setIsRunning(true)   
      setFinished(false)   
    }
  }

  return (
    <>
      <h1>Temporizador regressivo</h1>

      <input
        type="number"
        placeholder="Digite um número"
        onChange={e => setNum(Number(e.target.value))}
        disabled={isRunning}  // bloqueia input durante contagem
      />

      <br /><br />

      <button className='button' onClick={iniciar} disabled={isRunning || num <= 0}>
        Iniciar
      </button>

      <div style={{ marginTop: 20, fontSize: 30, fontWeight: 'bold' }}>
        {isRunning && num > 0 && num}
        {!isRunning && finished && "⏰ Tempo esgotado!"}
      </div>
    </>
  )
}

export default App
