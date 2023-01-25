// Escreva um programa onde, você chame uma função enviando um número, a função deve imprime na tela os número de 1 até o número que você enviou
const numbers = (number) => {
    for (i = 1; i < number; i++) {
        console.log('contando...', i)
    }
}
numbers(10)

//Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.
const table = (number) => {
    if (number > 10 || number < 1) {
        console.log("Aceitamos somente números entre 1 e 10")
        return
    }
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${number} = ${i * number}`)
    }
}
table(10)

// Escreva um programa onde, você chame uma função, e ela diga a hora exata!
console.log(new Date().toLocaleDateString('pt-BR'))
console.log(new Date().toLocaleTimeString('pt-BR'))


// Escreva um programa onde, você chame uma função, e ela diga que ano estamos!
console.log(new Date().getFullYear()) //ano
console.log(new Date().getMonth() + 1)    //mês 0=janeiro

//Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior

const numeros = (numberOne, numberTwo) => {
    if (numberOne > numberTwo) console.log("O primeiro é o  maior")
    else console.log(" O segundo é o maior")
}
numeros(2, 1)
//A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber: - média do salário da população; - média do número de filhos; - maior salário; - O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função!
/*
const Pessoas = [{
    filhos: 2,
    salario: 2000
},
{
    filhos: 5,
    salario: 3000
},
{
    filhos: 0,
    salario: 2500
},
{
    filhos: 2,
    salario: 1000
},
{
    filhos: 3,
    salario: 2300
},
{
    filhos: 1,
    salario: 200
},
{
    filhos: 0,
    salario: -2000
},

function pessoasSalario(peopleInformation) {
    let salarioMedio = 0
    let mediaFilhos = 0
    let maiorSalario = 0

    for (let i = 0; i <= peopleInformation.lenght; i++) {
        const salario = peopleInformation[i].salario
        const children = peopleInformation[i].numberOfChildren

        if (salario > maiorSalario) maiorSalario = salario
        if (salario < 0) {
            console.log(`Média de salário R$${(salarioMedio / i).toFixed(0)}`)
            console.log(`Média de Filhos R$${(mediaFilhos / i).toFixed(0)}`)
            console.log(`Maior salário R$${maiorSalario}`)
            break
        }
        else {
            salarioMedio = mediaFilhos + salario;
            mediaFilhos += children
        }
    }

}
]
pessoasSalario(peopleInformation)
*/




//Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento.
//Você deve enviar como argumentos da função - Valor  inicial investido - Valor atual do investimento - Tempo em meses, que o valor está investidoA função deve RETORNAR a taxa de juros, já formatada. Ex: 2,5%. Siga a formula desse vídeo para te auxiliar com o cálculo.
function calculate(valorInicial, valorAtual, tempo){
    const juros = (valorAtual - valorInicial) / (valorInicial * tempo)
    console.log((juros * 100).toFixed(2) + '%')
}

calculate(1000, 1200, 10)







