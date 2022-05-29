function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var date = new Date()
    var hours = date.getHours()
   

  

    msg.innerHTML = `Agora são ${hours} horas`

    if (hours >= 00 && hours < 12) {
        msg.innerHTML += ', Bom dia!'
        img.src = 'imagens/manha.png'
         document.body.style.background = '#fec276'          

    } else if (hours >= 12 && hours < 19){
        msg.innerHTML += ', Boa tarde!'
        img.src = 'imagens/tarde.png'
         document.body.style.background ='#a76c69'   

    } else {
        msg.innerHTML += ', Boa noite!'
        img.src = 'imagens/noite.png'
        document.body.style.background ='#313946'

    }

}

