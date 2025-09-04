import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 8. Detectar inatividade
// Criar um input de texto.
// Se o usuário parar de digitar por 2 segundos, mostrar:
// “Você parou de digitar...”.

function App() {
  const [texto, setTexto] = useState('');
  const [inativo, setInativo] = useState(false);

  useEffect(() => {
    // Se o texto mudar, significa que o usuário digitou algo
    // Então, tiramos a mensagem de inatividade
    setInativo(false);

    // Criamos um temporizador para 2 segundos
    const timer = setTimeout(() => {
      // Se o usuário não digitar nada por 2 segundos, mostramos a mensagem
      setInativo(true);
    }, 2000);

    // Limpa o timer quando o texto mudar (usuário digitar de novo)
    return () => clearTimeout(timer);
  }, [texto]); // executa toda vez que 'texto' mudar

  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={e => setTexto(e.target.value)}
        placeholder="Digite algo..."
      />
      {/* Mostrar mensagem se inativo for true */}
      {inativo && <p>Você parou de digitar...</p>}
    </div>
  );
}

export default App
