function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') //fano == parte correta do código
    var Fano = document.getElementById('txtano') //Fano == else if da linha 10
    var res = document.getElementById('res')
    var anciao = Number(1900)
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else if (fano.value.length < anciao){
        var Idade = ano - Number(Fano.value)
        window.alert(`Impossivel você ter essa idade, a pessoa mais velha do mundo chegou a ter 122 anos, haha! ( no acaso, você teria ${Idade} ).`)
        
    }  else {
        var fsex =  document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/kidH.png')
            } else if ( idade < 21 ) {
                //jovem
                img.setAttribute('src', 'imagens/jovemH.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adultoH.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosoH.png')
            }
            
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/kidM.png')
            } else if ( idade < 21 ) {
                //jovem
                img.setAttribute('src', 'imagens/jovemM.png')
            } else if (idade < 50) {
                //adulta
                img.setAttribute('src', 'imagens/adultaM.png')
            } else {
                //idosa
                img.setAttribute('src', 'imagens/idosaM.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos sexo ${genero} com ${idade} anos.`
        res.appendChild(img)  //appendChild vai mandar aparecer o atributo entre os parenteses, n vai substituir o anterior, vai juntar os dois.
    }
}