var get_hour = new Date()
var hora = get_hour.getHours()
console.log(`Agora são exatamente ${hora}h.`)
if (hora >= 6 && hora < 12) {
    console.log("Bom dia!")
} else if ( hora >= 12 && hora < 18) {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}