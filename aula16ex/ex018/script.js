let num = document.getElementById('fnum');
let lista = document.getElementById('flista');
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false 
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {            //-1 significa que o valor não está no array
        return true
    } else {
        return false 
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)){    
        valores.push(Number(num.value))
        let item = document.createElement('option') //aqui estou criando o elemento option dentro do select
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item) //aqui estou adicionando o elemento filho que é o item
        res.innerHTML = ''          //aqui serve pra limpar o que aparece abaixo do botão finalizar, caso add + números
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''         //aqui apaga o campo depois que adiciono o número 
    num.focus()          //fica o foco no campo para que a pessoa saiba que precisa fazer a edição ali

}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length                 //aqui estou verificando maior e menor valor
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {               //aqui estou olhando o vetor inteiro 
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            } if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}. </p>`
        
    }
}