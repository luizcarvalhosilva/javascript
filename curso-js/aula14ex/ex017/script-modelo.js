var txtNumber = document.querySelector("input#txtNumber")
var txtNumber2 = document.querySelector("input#txtNumber2")
var tab = document.getElementById("seltab")

function calculate() {
    const x = Number(txtNumber.value)
    var y = Number(txtNumber2.value)
    if (!x) {
        alert("Como você não digitou nenhum número, o programa não pôde ser executado.")
    } else {
        if (!y || y == 0) {
            alert("Não é possível executar para esse multiplicando. Tente outro.")
        } else {
            tab.size = y
            tab.className = "changeColor"
            tab.innerHTML = ""
            var c = 1
            while (c <= y) {
                var item = document.createElement("option")
                item.text = `${x} x ${c} = ${x * c}`
                tab.appendChild(item)
                c++
            }
        }
    }
}