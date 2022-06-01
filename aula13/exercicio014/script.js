function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    //  var hora = 21                              // se quiser testar com outros horários, comento a var hora de cima.
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18){
        // BOA TARDE!
        img.src = 'fototarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#1e1c43'
        // document.body.style.color = '#b9846f'    // assim consigo mudar a cor da fonte se quiser 
    }
}

