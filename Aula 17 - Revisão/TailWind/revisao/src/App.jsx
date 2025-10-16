import { useEffect, useState } from "react"
import { BotaoTW } from "./components/BotaoTW.jsx"
import axios from "axios"

function App() {
  {/* 
                API 
    {}
    [{},{},{}]
    https://dog.ceo/api/breeds/image/random -> formato objeto
    https://jsonplaceholder.typicode.com/users -> formato array
      
    instalar o axios: npm i axios
    importar o axios no app.jsx: import axios from "axios"
  */}

  const [dog, setDog] = useState({}) // formato objeto
  const [users, setUsers] = useState([]) // formato array

  const getDogData = async () => { // no singular pois é apenas um objeto
    const response = await axios.get("https://dog.ceo/api/breeds/image/random")
    setDog(response.data)
    console.log(response.data)
  }

  const getUsersData = async () => { // no plural pois é um array, mais de um objeto
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    setUsers(response.data)
    console.log(response.data) // mostra array inteiro
    //console.log(response.data[3]) para mostrar só um elemento do array
  }

  return (
    <>
      {/* TailWind */}
      <BotaoTW cor="bg-blue-300" conteudo="Login" altura="h-24" largura="w-48" hover="hover:bg-purple-400" />
      <br /><br />


      <button className="font-bold" onClick={() => getDogData()}>Buscar imagens</button>
      <br />
      <img src={dog.message} />


      <br /><br />
      <button className="font-bold" onClick={() => getUsersData()}>Receber usuários</button>
      <br />
      {/* vai fazer uma lista do array */}
      {
        users.map(user => <div key={user.id}>{user.name}</div>)
      }

    </>
  )
}



export default App
