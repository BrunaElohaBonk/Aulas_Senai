import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 9. Cronômetro
// Mostrar tempo em minutos e segundos (mm:ss).
// Criar botões: Iniciar, Pausar e Zerar.

function App() {
  const [tempo, setTempo] = useState(0);
  const [rodando, setRodando] = useState(false);

  // useRef para guardar o id do intervalo e poder limpar depois
  const intervaloRef = useRef(null);

  useEffect(() => {
    if (rodando) {
      intervaloRef.current = setInterval(() => {
        setTempo(prev => prev + 1);
      }, 1000);
    } else {
      // Se não estiver rodando, limpa o intervalo
      clearInterval(intervaloRef.current);
    }

    // Limpa o intervalo quando o componente desmontar ou quando rodando mudar
    return () => clearInterval(intervaloRef.current);
  }, [rodando]);

  // Função para formatar os segundos em mm:ss
  const formatarTempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    // Coloca zero à esquerda se precisar (ex: 5 -> 05)
    const minFormatado = minutos.toString().padStart(2, '0');
    const segFormatado = segundosRestantes.toString().padStart(2, '0');
    return `${minFormatado}:${segFormatado}`;
  };

  return (
    <div>
      <h1>{formatarTempo(tempo)}</h1>

      {/* Botões para controlar o cronômetro */}
      <button onClick={() => setRodando(true)}>Iniciar</button>
      <button onClick={() => setRodando(false)}>Pausar</button>
      <button onClick={() => {
        setRodando(false);
        setTempo(0);
      }}>Zerar</button>
    </div>
  );
}

export default App
