import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //1. Relógio digital
  //Mostrar o horário atual, atualizado de segundo em segundo.

  const [horario, setHorario] = useState(new Date())

  useEffect(() => {
    // Atualiza a hora a cada segundo
    const intervalo = setInterval(() => {
      setHorario(new Date());
    }, 1000);
  }, []); 

  const formatarHora = (data) => {
    const horas = data.getHours().toString().padStart(2, '0');
    const minutos = data.getMinutes().toString().padStart(2, '0');
    const segundos = data.getSeconds().toString().padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
  };

  return (
    <>
      <span className='titulo'>Relógio digital</span>
      <br /><br />
      <span className='horario'>Hora atual: {formatarHora(horario)}</span>
    </>
  )
}

export default App
