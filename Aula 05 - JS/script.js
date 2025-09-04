//sintaxe
let variavel1 = 5
var variavel2 = 10
const variavel3 = 15

//objeto
let pessoa = {
    nome: "Bruna",
    idade: 19 
}

//-------------------------------

let title = document.getElementById('el1').innerHTML
console.log(title)

const recebaTexto = () => { // Função
    let inputText = document.getElementById('el2').value
    console.log(inputText)
}

//-------------------------------

const trocaCor = () => {
    let quadrado = document.getElementById('quadrado')

    // if(quadrado.classList.contains('ok')) {
    //     quadrado.classList.remove('ok');
    //     quadrado.classList.add('bad')
    // }
    // else{
    //     quadrado.classList.remove('bad');
    //     quadrado.classList.add('ok')    
    // }

    //desafio
    quadrado.classList.remove('ok');
    quadrado.classList.add('recebaCor')
}

const recebaCor = () => {
    let cor = document.getElementById('recebaCor')
}