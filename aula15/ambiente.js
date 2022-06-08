let num = [5, 8, 2, 9, 3]
num[5] = 6;     //aqui estou adicionando um elemento na posição 5, ou posso fzer 
num.push(7)
console.log(`Vetor: ${num}`)



console.log(`O vetor tem ${num.length} posições`)



num.sort()           // .sort organiza o array do menor para o maior número
console.log(`Ordem arrumada com o .sort: ${num}`)


// for (let posicao = 0; posicao < num.length; posicao++) {         //aqui mostrei todos os números do vetor 
//     console.log(num[posicao])
// }

for (let posicao in num){
    console.log(`A posição ${posicao} tem o valor ${num[posicao]}`)
}