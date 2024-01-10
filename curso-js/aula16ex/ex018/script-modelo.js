let txtNumber = document.querySelector("input#txtNb") //num
let tab = document.querySelector("select#seltab") //select
let res = document.querySelector("div#result") //div#res
let values = [] //valores

function add() {
    let numberChoice = Number(txtNumber.value);
    if (txtNumber.value.length == 0) { // validação de input vazio
        alert("ERRO. Você não digitou nada, impossível calcular.");
    } else if (numberChoice < 1 || numberChoice > 100){ // validação de fora do range
        alert("ERRO. O número que você inseriu não está entre 1 e 100. Escolha outro!")
    } else if (values.includes(numberChoice)) { // com o 'includes' avalio se há o valor ou não.
        alert("ERRO. Este valor já foi adicionado. Escolha outro!");
    } else {
        values.push(numberChoice); //Adiciona o valor ao vetor.
        let newItem = document.createElement("option");
        newItem.text = `O valor adicionado foi ${numberChoice}.`;
        tab.appendChild(newItem);
        txtNumber.value = "";
        txtNumber.focus()
    }
}

function analize() {
    let soma = 0; // se mudar de posição vai dar erro!
    for (let n = 0; n < values.length; n++) {
        soma += values[n];
    }
    values.sort()
    if (values.length == 1) {
        res.innerHTML = `<p>Ao todo, temos ${values.length} número cadastrado.</p>`    
        res.innerHTML += `<p>Como você digitou apenas um único valor, não há necessidade de calcular soma e média.</p>`
    } else {
        res.innerHTML = `<p>Ao todo, temos ${values.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor foi ${values[values.length - 1]}.</p>`
        res.innerHTML += `<p>O menor valor foi ${values[0]}</p>`
        res.innerHTML += `<p>A soma de todos os valores é igual a ${soma}</p>`
        res.innerHTML += `<p>A média vale ${soma/values.length}.</p>`
    }
}