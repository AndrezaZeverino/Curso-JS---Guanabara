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

function Adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)){
        alert('Tudo ok!')
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }


    if (num.value.length == 0){
        
    } else {
        let n = Number(num.value)
        let c = 1
        flista.innerHTML = ''
        while (c <= 100) {
            let item = document.createElement('option')
            item.text= ``
        }
    }
}