let total = 0
function somar(){
    let val = document.getElementById("txtval")
    let res = document.getElementById("res")
    let n = Number(val.value)
    total += n
    res.innerHTML = `O valor total da compra é R$ ${total.toFixed(2)}`
}