/*
- Cria um novo array, apartir do array percorrido( array original)
- Cria um novo array APENAS com os elementos filtrados
- Aceita 3 parametros:
    *item do array
    *index
    *array  completo
    */

const list = [
    { name: "Rodolfo", vip: true },
    { name: "Maria", vip: false },
    { name: "João", vip: true },
    { name: "Bruno", vip: true },
    { name: "Carla", vip: false },
    { name: "Ana", vip: true },
    { name: "Julio", vip: false },
];

const justVips = list.filter(clientes => {
    return clientes.vip
})

// poderiamos também fazer da seguinte forma --->> const justVips = list.filter (clientes => return clientes.vip)





console.log(justVips)


const students = [
    { name: "Rodolfo", testGrade: 7 },
    { name: "Maria", testGrade: 5 },
    { name: "João", testGrade: 8 },
    { name: "Bruno", testGrade: 9 },
    { name: "Carla", testGrade: 3 },
    { name: "Ana", testGrade: 2 },
    { name: "Julio", testGrade: 10 },
];


const novoStudents = students.filter(clientes => clientes.testGrade < 7)



console.log(novoStudents)


/*const novaConst = students.map(clientes => {
const novosClientes = {
    name: clientes.name,
finalResult: clientes.finalResult,
sector: clientes.finalResult ? "approved" : "disapproved"

}
 return novosClientes
})
console.log(novaConst)
*/