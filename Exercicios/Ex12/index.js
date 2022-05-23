var idade = 20
console.log(`Você tem ${idade} anos`)
if ( idade < 16) {
    console.log('não vota!')
} else if (idade < 18 || idade >  65) {
    console.log('Voto Opicional!')
} else if (idade >= 18) {
    console.log('Voto Obrigatorio!')
}

