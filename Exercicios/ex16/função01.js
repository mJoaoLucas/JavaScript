function parimp(n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

var parimp = parimp(12)


console.log(`o número é: ${parimp}`)