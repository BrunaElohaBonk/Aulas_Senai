const recebaNum = () => { 
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    let n3 = Number(document.getElementById('n3').value)

    let maior
    let menor
    let media

    if (n1 > n2 && n1 > n3){
        maior = n1
    }
    else if (n2 > n1 && n2 > n3){
        maior = n2
    }
    else {
        maior = n3
    }

    if (n1 < n2 && n1 < n3){
        menor = n1
    }
    else if (n2 < n1 && n2 < n3){
        menor = n2
    }
    else {
        menor = n3
    }

    media = (n1 + n2 + n3)/3

    console.log("O maior número é: ", maior)
    console.log("O menor número é: ", menor)
    console.log("A média dos números é: ", media)
}
