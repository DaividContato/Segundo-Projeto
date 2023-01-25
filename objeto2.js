//Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const daivid= {
    name: "Daivid",
    age: 35,
    heigth: 1.73,
    cor: "white" }

const cintia = {
        name:"Cintia",
        age: 34,
        heigth:1.55,
        cor: "white"
    }

    console.log(daivid.name === cintia.name)