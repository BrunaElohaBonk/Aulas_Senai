import { useState } from 'react'
import axios from "axios"

function App() {
  const [divas, setDivas] = useState([]) 

  const getDivasData = async () => { 
    const response = await axios.get("https://avaliacao-bosch.onrender.com/all")
    setDivas(response.data)
    console.log(response.data) 
  }

  return (
    <>
    <button className="font-bold" onClick={() => getDivasData()}>Mostrar divas</button>
    <br />
    <div className='grid grid-cols-4 gap-4'>
      {
        divas.map(divas => 
          <div className="flex justify-center">
            <div key={divas.id} className='h-90 w-90 shadow-md shadow-xl/30 shadow-black-500/50 bg-gray-200 rounded-lg transition'>
              <br />
              <div className="flex justify-center items-center">
                <img className='rounded-sm h-52 w-52' src={divas.imagem} />
              </div>
              <br />
              <div className='font-bold flex justify-center items-center'>
                {"Diva: " + divas.nome + " " + divas.sobrenome}
              </div>
              <div className='flex justify-center items-center'>
                {"Id: " + divas.id}
              </div>
              <div className='flex justify-center items-center'>
                {
                  divas.apelido == "" ? "" : <p>Apelido: {divas.apelido}</p> 
                }
              </div>
              <div className='flex justify-center items-center'>
                {
                  divas.status == "Matriculado" ? <p className='bg-green-500'>Status: {divas.status}</p> : "" 
                }
                {
                  divas.status == "Não matriculado" ? <p className='bg-red-500'>Status: {divas.status}</p> : "" 
                }
              </div>
            </div>
          </div>
        )
      }
    </div>
    </>
  )
}

export default App
