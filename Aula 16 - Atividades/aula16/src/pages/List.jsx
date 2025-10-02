import { useEffect, useState } from 'react'
import axios from 'axios'
import { Router, useNavigate } from 'react-router-dom'

function List() {
  const [personagem, setPersonagem] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getPersonagem();
  }, [])

  const getPersonagem = async () => {
    const response  = await axios.get('https://api.disneyapi.dev/character')
    setPersonagem(response.data.data)
    console.log(response.data.data)
  }

  const openPersonagem = (personagem) => {
    navigate('/personagem', { state: { personagem }})
  }

  return (
    <>
    {
      personagem.map(personagem => (
          <li key={personagem._id} style={{ cursor: "pointer", marginBottom: "8px"}} onClick={() => openPersonagem(personagem)}>
            {personagem.name}
          </li>  
        ))
    }
    </>
  )
}

export default List