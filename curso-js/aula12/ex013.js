var diaSem = new Date()
var dia_Sem = diaSem.getDay()

switch (dia_Sem) {
    case 0:
        console.log("O dia é domingo.")
        break
    case 1:
        console.log("O dia é segunda-feira.")
        break
    case 2:
        console.log("O dia é terça-feira.")
        break
    case 3:
        console.log("O dia da semana é quarta-feira.")
        break
    case 4:
        console.log("O dia da semana é quinta-feira.")
        break
    case 5:
        console.log("O dia da semana é sexta-feira.")
        break 
    case 6:
        console.log("O dia da semana é sábado.")
        break
    default:
        console.log("O QUE VOCÊ INSERIU NÃO É VÁLIDO!!!")
    
}
