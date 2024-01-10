function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        msg.innerHTML += " Bom dia!" // bom dia
        img.src = "foto-manha.png"
        document.body.style.background = "#ffdb97"
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += " Boa tarde!" // boa tarde
        img.src = "foto-tarde.png"
        document.body.style.background = "#ff9802"
    } else if (hora >= 18 && hora < 23) {
        msg.innerHTML += " Boa noite!" // boa noite
        img.src = "foto-noite.png"
        document.body.style.background = "#1b3033"
    } else if (hora < 6) {
        msg.innerHTML += " Boa madrugada!" // boa madrugada
        img.src = "foto-madrugada.png"
        document.body.style.background = "#081b29"
    } 
}