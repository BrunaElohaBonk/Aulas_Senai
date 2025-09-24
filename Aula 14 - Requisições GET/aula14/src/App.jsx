import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [dog, setDog] = useState({})

  useEffect(() => {
    getDog();
  }, [])

  const getDog = async () => {
    const response  = await axios.get('http://dog.ceo/api/breeds/image/random')
    setDog(response.data)
  }

  return (
    <>
      <img src={dog.message} alt="" />
      <br />
      <button onClick={getDog} className='button'>Trocar imagem</button>
    </>
  )
}

export default App
