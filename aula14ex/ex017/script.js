function calcularTabuada() {
    let num = document.getElementById('txtn');
    let tabuada = document.getElementById('seltab')

    if (num.value.length == 0) {  
        alert('Por favor digite um número! ')
    } else {
        let n = Number(num.value)
        let c = 1 
        tabuada.innerHTML = ''     //aqui estou limpando os dados da tabuada quando a pessoa digita outro número
        while (c <= 10){
            let item = document.createElement('option')   //aqui estou criando o elemento option dentro do select
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab ${c}`
            tabuada.appendChild(item)                     //aqui estou adicionando o elemento filho que é o item
            c++
        }
    }
}