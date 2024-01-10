// alert("Está funcionando")
var getTextStart = document.querySelector("input#textStart")
var getTextIncr = document.querySelector("input#textIncr")
var getTextEnd = document.querySelector("input#textEnd")
var res = document.querySelector("div#result")

function doCount() {
    var number1 = Number(getTextStart.value) // parseFloat or parseInt
    var incr = Number(getTextIncr.value)
    var number2 = Number(getTextEnd.value)
    // res.innerHTML = `${number1 + number2 + incr}`
    if (number1 == 0 || number2 == 0 /*|| incr == 0*/) {
        alert("[ERROR] Missing elements.")
    } else {
        res.innerHTML = "Contando: <br>" 
        if (incr <= 0) {
            alert("Impossível contar, valor do passo inválido. Considerando passo igual a 1(um).")
            incr = 1
        } 
        if (number1 < number2) {
                for (var i = number1; i <= number2; i += incr) {
                    res.innerHTML += ` ${i} &#x1F449`
                }
            } else {
                for (var i = number1; i >= number2; i -= incr) {
                    res.innerHTML += ` ${i} &#x1F449`
                }
            }
            res.innerHTML += `&#x1F3C1`
    }
}
