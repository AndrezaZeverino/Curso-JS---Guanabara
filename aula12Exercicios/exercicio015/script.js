function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')    //essa linha e a 13 é como se eu fizesse essa inclusao no html
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebeMenino.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemHomem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'homemAdulto.jpg')
            } else {
                img.setAttribute('src', 'idosoHomem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebeMenina.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemMulher.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulherAdulta.jpg')
            } else {
                img.setAttribute('src', 'idosoMulher.jpg')
            }
        }
        res.style.textAlign = 'center'   //aqui centralizei com JS
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)     //aqui estou adicionando a imagem
    }

}