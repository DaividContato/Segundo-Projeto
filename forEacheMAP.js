// for each é uma função, for each serve para percorrer um array

/*const students = [
    { name: "Rodolfo", age: 25 },
    { name: "Maria", age: 43 },
    { name: "João", age: 21 },
    { name: "Bruno", age: 43 },
    { name: "Carla", age: 13 },
    { name: " Ana", age: 20 },
    { name: "Julio", age: 26 },
];*/
/*
let allStudentsAge = 0

students.forEach((student, index, array) => {
    allStudentsAge += student.age   
})

const averageAge = allStudentsAge / students.length

console.log(`A média dos alunos é de ${averageAge.toFixed(0)}`) */


// outra maneira da fazer

//let allStudentsAge = 0

//students.forEach((student, index, array) => {
//  console.log(`O aluno chama-se ${student.name}, tem ${student.age} anos e está na posição ${index} do meu array`)
//})

// no forEach primeiro argumento que ele aceita é o item, vc pode dar o nome que quiser no caso acima student

/*MAP 
- cria  um novo array, apartir do array percorrido(original)
- cria um novo array , com a mesma qtdd de itens do array original 
- aceita 3 parametros ( item do array, index, array completo)

*/
/*
const numbers = [1, 2, 3, 4]
const student = [
    { name: "Rodolfo", age: 25 },
    { name: "Maria", age: 43 },
    { name: "João", age: 21 },
    { name: "Bruno", age: 43 },
    { name: "Carla", age: 13 },
    { name: " Ana", age: 20 },
    { name: "Julio", age: 26 },

];
*/

//const newArray = numbers.map((number) => {
//return number * 2
//})
//console.log(numbers) // array original
//console.log(newArray) //array criado pelo MAP * 2 

/*
const newStudents = student.map((student) => {
    const newStudent = {
        name: student.name + ' da Silva ',
        age: student.age - 5
    }
    return newStudent
})
console.log(student )
console.log(newStudents)

*/


const numbers = [1, 2, 3, 4]
const student = [
    { name: "Rodolfo", age: 25 },
    { name: "Maria", age: 43 },
    { name: "João", age: 21 },
    { name: "Bruno", age: 43 },
    { name: "Carla", age: 13 },
    { name: " Ana", age: 20 },
    { name: "Julio", age: 26 },

];

const double = number => number * 10
const soma = number => number + 100
const toReais = number => `R$ ${number.toFixed(2)}`


const newArray2  = numbers.map(double).map(soma).map(toReais)

console.log(`A soma dos números em reais é ${newArray2}`)