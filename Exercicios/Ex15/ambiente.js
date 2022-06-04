var num = [5, 8, 9, 7, 10, 85, 12] //nome disso é vetor
num.sort()

num[6] = 300 //vai adicionar um valor a casa 6 (começa contando a partir do 0)
num.push(90, 50, 500, 450) //vai adicionar valores a partir do ultimo sem precisar de uma contagem
console.log(`temos os valores ${num} na variavel`)





let pos = num.indexOf(4)


if (pos == -1) {
console.log('Valor não encontrado!!')    
} else {
console.log(`O valor 8 está na posição ${pos}`)
    
}