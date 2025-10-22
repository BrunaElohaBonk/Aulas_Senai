import { useState } from 'react'
import axios from "axios"

function App() {
  const [user, setUser] = useState({}) 
  const [endereco,setEndereco] = useState({})

  const getUserData = async () => {
    const response = await axios.get("https://avaliacao-bosch.onrender.com/usuario")
    setUser(response.data)
    setEndereco(response.data.endereco)
    console.log(response.data)
  }

  return (
    <>
    <div className="bg-blue-500 h-svh w-svw flex justify-center items-center">
      <div>
        <button className="font-bold" onClick={() => getUserData()}>Ver perfil</button>
        <br />
      </div>
      <div className="bg-blue-100 h-170 w-300 flex justify-center rounded-xl">
        <div className="font-bold justify-center aling-itens-center text-3xl font-serif">
          <br />
          {user.nome}
        </div>
        <div className="bg-blue-70 h-140 w-300 grid grid-cols-3 rounded-xl">
          <div className="bg-blue-300 h-70 w-60 rounded-xl">
            <div className="items-center justify-center">
              <p className='font-bold'>Dados pessoais</p>
            </div>
            <br />
            <p><span className='font-bold'>Idade: </span>{user.idade}</p>
            <p><span className='font-bold'>Email: </span>{user.email}</p>
            <p><span className='font-bold'>Endereço: </span>{endereco.rua + ", n°" + endereco.numero + ", " + endereco.cidade + " - " + endereco.estado}</p>
          </div>
          <div className="bg-blue-300 h-70 w-60 rounded-xl">
            <p className='font-bold items-center justify-center'>Habilidades</p>
            <br />
            {user.habilidades}
          </div>
          <div className="bg-blue-300 h-70 w-60 rounded-xl">
            <p className='font-bold items-center justify-center'>Projetos</p>
            <br />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
