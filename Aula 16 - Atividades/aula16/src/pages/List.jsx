import { useEffect, useState } from 'react'
import axios from 'axios'
import { Router, useNavigate } from 'react-router-dom'
import './List.css'

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
    <div className=" body">
      <div className='flex faixa'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Disney_logo.png" className='disney' alt="disney" height="30"/>
      </div>

      {
        personagem.map(personagem => (
          <div className="container">
            <div>
                {
                  personagem._id > 25 ? "" : <li key={personagem._id} style={{ cursor: "pointer", marginBottom: "8px" }} onClick={() => openPersonagem(personagem)}> {personagem.name}</li> 
                }
            </div>
            <div>
                {
                  personagem._id < 25 ? "" : <li key={personagem._id} style={{ cursor: "pointer", marginBottom: "8px" }} onClick={() => openPersonagem(personagem)}> {personagem.name}</li> 
                }
            </div>
          </div>
          ))
      }
    </div>
    </>
  )
}

export default List