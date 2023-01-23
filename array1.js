//Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime true. João e Maria, imprime false.

const names = ['Daivid', 'Joaozin']

const compare = names[0] !== names[1] // !== Nomes são diferentes?? TRUE - SIM

console.log(compare)




//push adicionar item no meu array
/*
const estudantes = ['Maria', 'João', 'Ana', 'Carlos', 'Elizete']

estudantes.push('Daivid')
estudantes.push('Cintia')

console.log(estudantes)
*/

//length quantidade itens no meu array

/*
const estudantes = ['Maria', 'João', 'Ana', 'Carlos', 'Elizete']

console.log(estudantes.length)

*/

// sort organiza em ordem alfabética

/*
const estudantes = ['Maria', 'João', 'Ana', 'Carlos', 'Elizete']

console.log(estudantes.sort())

*/

//delete deleta um item do array

/*
const estudantes = ['Maria', 'João', 'Ana', 'Carlos', 'Elizete']

delete estudantes[1] //posição 1= jõao 

console.log(estudantes)
*/

//splice ( unir, ligar) - adicionar e retirar na posição indicada


//const estudantes = ['Maria', 'João', 'Ana', 'Carlos', 'Elizete']

//estudantes.splice(2, 2) // apartir do item 2 retirar 2elementos (ana, carlos)(2,2)

//console.log(estudantes)

/*
const estudantes = ['Maria', 'João', 'Ana', 'Carlos', 'Elizete']

estudantes.splice(1, 2) // apartir do item 1 retirar 2 elementos ( joao, ana)

console.log(estudantes)
*/

/*
const estudantes = ['Maria', 'João', 'Ana', 'Carlos', 'Elizete']
estudantes.splice(1,1, 'Daivid') //posso adicionar na posição que quiser e tb substituir ex 1,1 tiro o joao e coloca daivid

console.log(estudantes)
*/


//slice (fatiar) não muda o array original, ele cria um novo array com os itens que fatiamos (1,4)

/*
const estudantes = ['Maria', 'João', 'Ana', 'Carlos', 'Elizete']

const novosEstudantes = estudantes.slice(1,4) // começa no 1 joao e conta até 4 elizete, mas o 4 ele não executa!

console.log(novosEstudantes)
*/

//pop retira o ultimo item do array(elizete)
//shift retira o primeiro item do array (maria)

const estudantes = ['Maria', 'João', 'Ana', 'Carlos', 'Elizete']

estudantes.shift()
estudantes.pop()

console.log(estudantes)