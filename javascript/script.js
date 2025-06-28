let total = 0
let c = 0
let valores = [0]
function Adicionar(){
    let produto = document.getElementById("itxtn").value
    let val = document.getElementById("txtval")
    let res = document.getElementById("res")
    let tab = document.getElementById("tab")
    let n = Number(val.value)

    if(produto.length == 0 || val.value.length == 0){
        alert("Escreva o PRODUTO e o seu PREÇO!")
    }
    else{
        total += n
        valores.push(n)
        c += 1

        res.innerHTML = `O valor total da compra é R$ ${total.toFixed(2)}`
        let elemento = document.createElement('option')
        elemento.value = `${c}`
        elemento.id = `opcao${c}`
        elemento.text = `${c}º - ${produto} - R$ ${n.toFixed(2)}`
        tab.appendChild(elemento)
    }
    
}




// Falta sinconizar o valor da tabela com o do resultado!! Tentar depurar!


/*
function del(){
    let produto = document.getElementById("itxtn").value
    let txtcod = document.getElementById("idel")
    let val = document.getElementById("txtval")

    let codigo = Number(txtcod.value)
    let n = Number(val.value)
//problema
    let desc = valores[codigo]

    total -= desc
    total += n
//problema
    let elemento = document.getElementById(`opcao${codigo}`)
    elemento.text = `${codigo}º - ${produto} - R$ ${n.toFixed(2)}`
    
    res.innerHTML = `O valor total da compra é R$ ${total.toFixed(2)}`
}
*/
