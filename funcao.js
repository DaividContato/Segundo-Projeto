//função ( argumentos e paremetros)

function sum(numero1, numero2) {       //void = vazio    (qd nao tem o return)           //paremetros
    return numero1 + numero2
}

sum(2, 3)                                            //argumentos
sum(5, 5)



const numberOne = 10
const numberTwo = 20

console.log(`O Primeiro número é ${numberOne}`)
console.log(`O Segundo número é ${numberTwo}`)
console.log(`E a soma dos dois é ${sum(numberOne, numberTwo)}`)


// Arrow function ( escrever o cogido com menos linhas)

const sum = function(numero1, numero2){
    const result = numero1 + numero2
    return result
} // sem arrow 

 
const sum = ( numero1, numero2) => numero1 + numero2 // com arrow function
