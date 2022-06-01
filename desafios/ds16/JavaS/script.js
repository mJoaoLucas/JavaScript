function contando() {
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pass = document.getElementById('pass')
    var res = document.getElementById('res')
    //variaveis q conectam ao html

   

  if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
    window.alert('[ERROR] está faltando dados!!')
  } else {
      res.innerHTML = 'Contando: '
        i = Number(ini.value)
        f = Number(fim.value)
        p = Number(pass.value)
      if (p <= 0) {
        window.alert('Passo invalido! Considerando PASSO 1')
        p = 1
      }
      if(i <= f) {
        //contagem crescente
        for(var c = i; c <= f; c += p) {
          res.innerHTML += `${c} \u{1f449}`
      }
    }else {
      //contagem regressiva
      for(var c = i; c >= f; c -= p)
      res.innerHTML += `${c} \u{1f449}`
    }

    res.innerHTML += `${c} \u{1f3c1}`
  }

    
}   


