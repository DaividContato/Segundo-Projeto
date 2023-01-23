//Faça um programa que compare um número com 10 e imprime na tela "o número é maior, o número é menor o número é igual"
const Number = 30
if (Number > 10) {
    //console.log("Maior que 10")

}
else if (Number < 10) {
    //console.log("Menor que 10")
}
else {

    //console.log("Igual a 10")
}
//Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO

const Amarildo = {
    nome: "Amarildo",
    idade: 58,
    altura: 1.79,
    nacionalidade: "portugues"
}
if (Amarildo.nacionalidade === "brasileira") {
    console.log("Ele é Brasileiro")
}

else {
    console.log("Ele é estrangeiro")
}


//Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.
const aleatorioMumber = Math.floor(Math.random() * (10 - 1) + 1)
const ganhadorMumber = Math.floor(Math.random() * (10 - 1) + 1)

if (aleatorioMumber === ganhadorMumber) {
    console.log("Voce ganhou")
}
else {
    console.log("Voce perdeu")
}



//Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor
const NumberOne = 10
const NumberTwo = 20
const NumberTree = 30

if (NumberOne > NumberTwo && NumberOne > NumberTree) {
    console.log("O Primeiro é o maior")
}
if (NumberOne < NumberTwo && NumberOne < NumberTree) {
    console.log("O Primeiro é o menor")
}

//Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.


const Object01 = {
    nome: "Daivid",
    idade: "35",
    sexo: "masculino",
    profissão: "Programador",
    nacionalidade: "brasileira"
}
const Object02 = {
    nome: "Cintia",
    idade: "15",
    sexo: "feminino",
    profissão: "propagandista",
    nacionalidade: "brasileira"
}

if (Object01.idade >= 18 && (Object01.nacionalidade === "brasileiro" || Object01.nacionalidade === "brasileira")) {
    console.log("Voce passou no processo")
}
else {
    console.log("Voce NÃO passou no processo")
}




//Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.1
const nota = 1
switch (nota) {


    case 1:
        console.log("Foi muito ruim")
        break;

    case 5:
        console.log("Voce está na média")
        break;


    case 10:
        console.log("Foi muito bom")
        break;


    default:
        break;
}

//Faça um programa onde leia um numero e diga se ele é par ou impar.

const Number1 = 12

if (Number1 % 2 === 0) console.log("o numéro é par")

else console.log("o número é impar")



//Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.

const Numero = 11

if (Numero % 2 === 0) {
    if (Numero % 5 === 0) console.log("O número é par e divisivel por 5")
    else console.log("O número é par e não é divisivel por 5")
}

else {
    for (let i = 2; i < Numero; i++)
        if (Numero % i === 0) {
            console.log("Ele é impar, mas não é primo")
            break
        }
        else {
            if (i === Numero - 1) console.log("Ele é um número primo")
        }
}

//Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.

const numberfour = 4
const numberfive= 6
const numbersix = 8
const numberseven = 10

if (numberfour % 2 == 0 && numberfive % 2 == 0 && numbersix % 2 === 0 &&  numberseven % 2 === 0 ) {
    console.log ("Todos são Pares")
} else if (numberfour % 2 !== 0 && numberfive % 2 !== 0 && numbersix % 2 !== 0 && numberseven % 2 !== 0) {
    console.log ("Todos são impares")
} else {
    console.log ("Tudo misturado, impares e pares") 
}


