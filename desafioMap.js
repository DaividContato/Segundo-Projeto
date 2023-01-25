/*

const list = [
    { name: "Rodolfo", vip: true },
    { name: "Maria", vip: false },
    { name: "João", vip: true },
    { name: "Bruno", vip: true },
    { name: "Carla", vip: false },
    { name: "Ana", vip: true },
    { name: "Julio", vip: false },
];

const newList = list.map(cliente => {
    const novoCliente = {
        name: cliente.name,
        vip: cliente.vip,
        sector: cliente.vip ? 'Black' : 'Green'

    }
    return novoCliente
})
 console.log(newList)

 */


/*
const list2 = [
    { name: "Rodolfo", vip: true, setor: "Black" },
    { name: "Maria", vip: false, setor: "Green" },
    { name: "João", vip: true, setor: "Black" },
    { name: "Bruno", vip: true, setor: "Black" },
    { name: "Carla", vip: false, setor: "Green" },
    { name: "Ana", vip: true, setor: "Black" },
    { name: "Julio", vip: false, setor: "Green" },
];

*/




const students = [
    { name: "Rodolfo", testGrade: 7 },
    { name: "Maria", testGrade: 5 },
    { name: "João", testGrade: 8 },
    { name: "Bruno", testGrade: 9 },
    { name: "Carla", testGrade: 3 },
    { name: "Ana", testGrade: 2 },
    { name: "Julio", testGrade: 10 },
];

/*
const approvedStudents = students.map(student => {
    let approvedOrNot
    if (student.testGrade >= 7) {
        approvedOrNot = "approved"
    }
    else {
        approvedOrNot = "disapproved"
    }

    const students = {
        name: student.name,
        finalResult: approvedOrNot
    }
    return students
});
 console.log(approvedStudents)

/*
const students2 = [
    { name: "Rodolfo", finalResult: "approved" },
    { name: "Maria", finalResult: "disapproved" },
    { name: "João", finalResult: "approved" },
    { name: "Bruno", finalResult: "approved" },
    { name: "Carla", finalResult: "disapproved" },
    { name: "Ana", finalResult: "approved" },
    { name: "Julio", finalResult: "disapproved" },
]
*/

const novaConst = students.map(clientes => {
    const novosClientes = {
        name: clientes.name,
    finalResult: clientes.finalResult,
    sector: clientes.finalResult ? "approved" : "disapproved"

    }
     return novosClientes
})
 console.log(novaConst)