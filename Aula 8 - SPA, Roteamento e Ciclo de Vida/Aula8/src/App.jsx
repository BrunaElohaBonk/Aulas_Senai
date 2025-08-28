import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // aqui é só exemplo!
  // const [count, setCount] = useState(0)
  // const [texto, setTexto] = useState("")

  // Exercício 1: controla a visibilidade do texto
  const [visivel, setVisivel] = useState(true) //Cria uma variável de estado chamada visivel. "setVisivel" é a função usada para alterar o valor.

  // Exercício 2: controla a cor de fundo da div
  const [corFundo, setCorFundo] = useState("lightgray") //Define a cor de fundo de uma div.

  // Exercício 3: conta cliques e atualiza contador a cada 10
  const [cliques, setCliques] = useState(0)
  const [contador, setContador] = useState(0)

  // Exercício 4: armazena o nome digitado
  const [nome, setNome] = useState("")

  // Função que inverte o valor de "visivel"
  const alterarVisibilidade = () => { //Se for true, vira false; se for false, vira true.
    setVisivel(!visivel)
  }

  // Função que alterna a cor entre lightgray e lightblue
  const alterarCor = () => {
    const novaCor = corFundo === "lightgray" ? "lightblue" : "lightgray" // semelhante ao if else. ? = if, : = else.
    setCorFundo(novaCor)
  }

  // A cada clique, conta 1. Quando atingir 10, incrementa o contador.
  const contarCliques = () => {
    const novosCliques = cliques + 1
    setCliques(novosCliques)

    if (novosCliques % 10 === 0) {
      setContador(contador + 1)
    }
  }

  return (
    <>
      {/* Exercício 1 */}
      <span className="enunciado">
        1 - Faça um botão que altere a visibilidade de um texto dentro da página. visível ou escondido.
      </span>
      <br />
      <button onClick={alterarVisibilidade}>Alterar visibilidade</button>
      <br />
      {/* Renderiza o texto somente se "visivel" for true */}
      {visivel && ( //Se visivel for true, o texto aparece. Se for false, o texto não é renderizado.
        <span>
          O sol ainda não havia nascido completamente, mas a luz dourada já tocava as copas das árvores. 
          As ruas estavam vazias, e o silêncio da manhã parecia conversar com quem ousasse escutá-lo. Era um 
          instante raro, onde tudo parecia possível — como se o mundo respirasse fundo antes de começar mais um dia.
        </span>
      )}
      <br /><br />

      {/* Exercício 2 */}
      <span className="enunciado">
        2 - Faça um botão que altere a cor de fundo de uma div
      </span>
      <br />
      <button onClick={alterarCor}>Alterar cor de fundo</button>
      <div style={{ backgroundColor: corFundo, padding: "20px", marginTop: "10px" }}>
        Esta é a div S2
      </div>
      <br /><br />

      {/* Exercício 3 */}
      <span className="enunciado">
        3 - Exiba um contador que a cada dez cliques atualiza de 1 em 1 na tela.
      </span>
      <br />
      <button onClick={contarCliques}>Clique aqui!</button>
      <br />
      <span>Contador: {contador}</span>
      <br /><br />

      {/* Exercício 4 */}
      <span className="enunciado">
        4 - Faça um campo de texto que exiba uma mensagem de bem-vindo com o nome inserido, alterando o estado.
      </span>
      <br />
      <input 
        type="text" 
        placeholder='Digite seu nome: '
        onChange={(e) => setNome(e.target.value)} // e.target.value é o que foi digitado.
      />
      <br />
      <span>{nome && `Bem-vindo, ${nome}!`}</span>
      <br /><br />
      

      {/* aqui é só exemplo!
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <br />
      <input type="text" onChange={(e) => setTexto(e.target.value)}/>
      <h1>{texto}</h1> */}
    </>
  )
}

export default App
