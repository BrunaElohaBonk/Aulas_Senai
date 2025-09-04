import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 7. Par ou ímpar automático
// Criar um contador que aumenta sozinho de 1 em 1 a cada segundo.
// Mostrar na tela: “O número X é par/ímpar”.

function App() {
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setNumero((prevNumero) => prevNumero + 1); // Atualiza o número somando 1
    }, 1000);

    return () => clearInterval(intervalo);
  }, []); 

  // Função para verificar se o número é par ou ímpar
  const parOuImpar = numero % 2 === 0 ? "par" : "ímpar";

  return (
    <div>
      {/* Mostrar na tela o número e se ele é par ou ímpar */}
      <h1>O número {numero} é {parOuImpar}.</h1>
    </div>
  );
}

export default App
