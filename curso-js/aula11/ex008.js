var vel_max = 70
var vel = 120
if ((vel_max / 2) > vel || vel > vel_max) {
    console.log(`A velocidade máxima é ${vel_max}Km/h. Você estava dirigindo há ${vel}Km/h.`)
    console.log("Por não dirigir conforme a lei, você foi MULTADO!!!")
}

console.log("Siga dirigindo conforme as regras.")