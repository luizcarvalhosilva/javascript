function verificar() {
    var date = new Date()
    var year = date.getFullYear()
    var res = document.querySelector("div#result")
    var FormYear = document.querySelector("input#year")
    if (FormYear.value.length == 0 || Number(FormYear.value) > year) {
        window.alert("[ERROR] - Your input was considered invalid. Please try again.")
    } else {
        var FormSex = document.getElementsByName("radsex")
        var age = year - Number(FormYear.value)
        var TxtLogic = ""
        if (age > 1) {
            TxtLogic = "anos"
        } else {
            TxtLogic = "ano"
        }
        var gender = "" 
        var img = document.createElement("img") // criando um elemento img
        img.setAttribute("id", "foto")         // com um id = "foto"   
        if (FormSex[0].checked) {
            gender = "Homem"
            if (age >= 0 && age < 10) { //child
                img.setAttribute("src", "child-male.png")
            } else if (age < 21) { //teen
                img.setAttribute("src", "teen-male.png")
            } else if (age < 60) { //adulto
                img.setAttribute("src", "adult-male.png")
            } else {              //idoso
                img.setAttribute("src", "older-male.png")
            }
        } else {
            gender = "Mulher"
            if (age >= 0 && age < 10) { //child
                img.setAttribute("src", "child-female.png")
            } else if (age < 21) { //teen
                img.setAttribute("src", "teen-female.png")
            } else if (age < 60) { //adulto
                img.setAttribute("src", "adult-female.png")
            } else {              //idoso
                img.setAttribute("src", "older-female.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gender} com ${age} ${TxtLogic}.`
        res.appendChild(img)
    }
}


/*var InputYear = Number(FormYear.value)
res.innerHTML = `${InputYear}` 
var age = year - FormYear.value 
*/