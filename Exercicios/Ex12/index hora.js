var agora = new Date()
var hora  = agora.getHours()
hora = 3
//console.log(`${idade}`)
//----------------------------------------------------------------------------------------------------------------
if (hora >= 5 || hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18 ) {
    console.log('Boa Tarde!')
} else if (hora <= 23 ) {
    console.log('Boa Noite!')
} 
