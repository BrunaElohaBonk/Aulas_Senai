import { useEffect, useState } from "react"
import { Botao } from "./components/Botao"

function Pessoa({nome, sobrenome, idade}){
  return(
    <>
    <h1>Nome: {nome}</h1>
    <h1>Sobrenome: {sobrenome}</h1>
    <h1>Idade: {idade}</h1>
    </>
  )     
}

function App() {
  const [value, setValue] = useState(0)
  const [text, setText] = useState("")
  const [show, setShow] = useState(true)
  
  useEffect(() => {
    console.log("Testando o useEffect com Text")
  }, [text])

  useEffect(() => {
    console.log("Testando o useEffect com Value")
  }, [value])

  return (
    <>
      <button onClick={() => setValue(value + 1)}>+</button>
      {value}
      <button onClick={() => setValue(value - 1)}>-</button>

      <br />

      <input type="text" onChange={(e) => setText(e.target.value)}/>
      <h1>{text}</h1>

      <br />

      <button onClick={() => setShow(!show)}>Alternar visibilidade</button>
      { show &&
        <div style={{backgroundColor: 'blue', width: '200px', height: '200px'}}></div>
      }

      <Pessoa nome = "Bruna Elohá" sobrenome = 'Bonk' idade = '19'/>

      <Botao cor="green" conteudo="Login" altura="50px" largura="200px" />
      <br /><br />
      <Botao cor="blue" conteudo="Cadastro" altura="50px" largura="100px" />
    </>
  )
}



export default App
