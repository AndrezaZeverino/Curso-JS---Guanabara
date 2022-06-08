// FOR E FOR IN TÊM A MESMA FUNCIONALIDADE 


let valores = [8, 1, 7, 4, 2, 9]

// for (let posicao = 0; posicao < valores.length; posicao++){
//     console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
// }

// for in     abaixo significa: para cada posição no num 
for (let posicao in valores) {
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}

console.log(valores.indexOf(5))          //procurei um número que não existe no meu array, então o retorno é -1


