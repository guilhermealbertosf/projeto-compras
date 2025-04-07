let total = 0
let c = 0
function somar(){
    let produto = document.getElementById("itxtn").value
    let val = document.getElementById("txtval")
    let res = document.getElementById("res")
    let tab = document.getElementById("tab")
    let n = Number(val.value)
    total += n
    c += 1
    res.innerHTML = `O valor total da compra é R$ ${total.toFixed(2)}`
    let elemento = document.createElement('option')
    elemento.value = `${c}`
    elemento.id = `opcao${c}`
    elemento.text = `${c}º - ${produto} - R$ ${n.toFixed(2)}`
    tab.appendChild(elemento)
}




// Falta sinconizar o valor da tabela com o do resultado!!



function del(){
    let produto = document.getElementById("itxtn").value
    let codigo = document.getElementById("idel").value
    let val = document.getElementById("txtval")
    let n = Number(val.value)
    let elemento = document.getElementById(`opcao${codigo}`)
    elemento.text = `${codigo}º - ${produto} - R$ ${n.toFixed(2)}`
    total += n
}