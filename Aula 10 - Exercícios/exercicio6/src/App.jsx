import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 6. Semáforo
// Três cores: vermelho, amarelo, verde.
// A cada 3 segundos, mudar para a próxima cor automaticamente.

function App() {
  const cores = ["vermelho", "amarelo", "verde"];
  const [corAtual, setCorAtual] = useState(0); // Estado que guarda o índice da cor atual do semáforo (0 = vermelho, 1 = amarelo, 2 = verde)

  useEffect(() => {
    const intervalo = setInterval(() => {
      // Se estiver na última cor, volta para a primeira (índice 0)
      setCorAtual((corAnterior) => (corAnterior + 1) % cores.length);
    }, 3000);

    return () => clearInterval(intervalo); // limpa o intervalo quando o componente desmonta
  }, []);

  return (
    <div>
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: corAtual === 0 ? "red" : "gray",
          borderRadius: "50%",
          margin: "10px auto",
        }}
      />
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: corAtual === 1 ? "yellow" : "gray",
          borderRadius: "50%",
          margin: "10px auto",
        }}
      />
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: corAtual === 2 ? "green" : "gray",
          borderRadius: "50%",
          margin: "10px auto",
        }}
      />
    </div>
  );
}

export default App