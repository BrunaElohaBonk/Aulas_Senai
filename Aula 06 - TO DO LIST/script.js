// Esta função é chamada quando o botão "Adicionar" é clicado
function adicionarTarefa() {
    // Pega o input do campo onde o usuário digita a tarefa
    const inputElement = document.getElementById("campoTarefa")
    const input = document.getElementById("campoTarefa").value;

    // Se o campo estiver vazio, não faz nada (evita adicionar tarefa vazia)
    if (input === "") return;

    // Pega o elemento da lista (ul) onde as tarefas serão adicionadas
    const lista = document.getElementById("lista-tarefas"); // recebe a lista toda

    // Cria um novo item da lista (li)
    const item = document.createElement("li"); // cria um elemento a lista

    // Adiciona uma classe ao item (só para estilizar com CSS)
    item.classList.add("item-tarefa");

    // Define o conteúdo do item:
    // 1. O texto da tarefa
    // 2. Um botão "❌" que chama a função excluirTarefa ao ser clicado
    item.innerHTML = ` 
        <span class="texto-tarefa">${input}</span> 
        <div class="botoes-tarefa">
            <button onclick="marcarComoConcluida(this)">✅</button>
            <button onclick="excluirTarefa(this)">❌</button>
        </div>
        
    `; // innerHTML cria um elemento atraves de uma string   
       // O texto da tarefa está dentro de uma <span class="texto-tarefa">, o que nos permite aplicar o estilo de "riscado" 

    // Adiciona o item criado dentro da lista
    lista.appendChild(item);

    // Limpa o campo de texto para permitir digitar outra tarefa
    inputElement.value = "";
}


function marcarComoConcluida(botao) {
    const item = botao.parentElement; // pega o <li>
    const texto = document.querySelector('.texto-tarefa'); // pega o <span>
    // texto.classList.toggle("concluida"); // adiciona/remove a classe "concluida"
    texto.classList.toggle('concluida')
}


// Esta função é chamada quando o botão "❌" é clicado
function excluirTarefa(botao) {
    // O botão está dentro do <li>, então acessamos o pai dele
    const item = botao.parentElement.parentElement;

    // Remove o item da lista
    item.remove();
}
