let nomes = ['Ana', 'Elias', 'Andreza', 'Filipe', 'Pingo', 'Amora']
console.log(nomes)

for ( let posicao = 0; posicao < nomes.length; posicao++ ){
    console.log(`O nome da posicao ${posicao} é ${nomes[posicao]}`)
}

for (let posicao in nomes) {
    console.log(`O nome da posicao ${posicao} é ${nomes[posicao]}`)
}