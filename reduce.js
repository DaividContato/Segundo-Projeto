/*reduce - reduzir 
- Retorna um valor {pode ser um novo array, um objeto, string, number, etc.}
- Aceita 4 parametros
    * acumulador
    * valor atual
    * index
    * array completo 
     */

const list = [1, 2, 3, 4];

const sum = list.reduce((acc, valorAtual) => {
    return acc + valorAtual
}, 2)

console.log(sum)


//poderiamos ter feito da seguinte forma , economizando linhas de códigos!
//const sum = list.reduce((acc, valorAtual) => acc + valorAtual, 2)
//console.log(sum)




const companies = [
    { name: 'Sansung', marketValue: 50, CEO: 'Kim Hyun Suk', fundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', fundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanick', fundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zukerberg', fundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', fundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', fundedOn: 1976 },
];

// fazer a soma( marketValue) de todas as companias, utilizando REDUCE!!!
/*
const soma = companies.reduce((acc, valorAtual)=> {
    return acc + valorAtual.marketValue

},0)

console.log(soma)
*/

// ou economizando linhas de cógidos

const soma = companies.reduce((acc, valorAtual) => acc + valorAtual.marketValue ,0)

console.log(soma)


