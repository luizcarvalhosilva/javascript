function calculate() {
    var txtNb1 = document.getElementById("txtNb1")
    var txtNb2 = document.getElementById("txtNb2")
    var pass = document.getElementById("pass")
    var incr = Number(pass.value)
    var start = Number(txtNb1.value)
    var end = Number(txtNb2.value)
    var res = document.querySelector("div#result")
    if (txtNb1.value.length == 0 || txtNb2.value.length == 0 || pass.value.length == 0) {
        window.alert("ERROR. Missing elements")
    } else {
        res.innerHTML = "Contando: <br>" 
        if (incr <= 0) {
            alert("Passo inválido. Considerando passo igual a 1")
            incr = 1
        }
        if (start < end) { // contagem progressiva
            for (var i = start; i <= end; i += incr) {
                // res.innerHTML += `` assim não deu certo no código de baixo.
                res.innerHTML += ` ${i} &#x1F449`
            }
        } else { // contagem regressiva.
            for (var i = start; i >= end; i -= incr) {
                // res.innerHTML -= `` aqui não deu certo assim.
                res.innerHTML += ` ${i} &#x1F449`;
            }
        }
        res.innerHTML += `&#x1F3C1`
    }    
}






//var res = document.querySelector("div#result")
    //res.innerHTML = `${number1 + number2}`