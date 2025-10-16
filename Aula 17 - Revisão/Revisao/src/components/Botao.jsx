// export function Pessoa({nome, idade, profissao}){
//     return(
//         <>
//         <h1>Nome: {nome}</h1>
//         <h1>Idade: {idade}</h1>
//         <h1>Profissão: {profissao}</h1>
//         </>
//     )
// }

export function Botao({cor, conteudo, altura, largura}){
    return(
        <>
            <button style={{backgroundColor: cor, height: altura, width: largura}}>{conteudo}</button>
        </>
    )
}