const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000];

const newLista = list.filter(numberPares => numberPares % 2  === 0 && numberPares % 5 === 0 );

//novaLista = list.filter(numero => numero % 2 === 0 & numero % 5 === 0
// novo array com numeros pares e divisiveis por 5

console.log(newLista)



const companies = [
    { name: 'Sansung', marketValue: 50, CEO: 'Kim Hyun Suk', fundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', fundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanick', fundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zukerberg', fundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', fundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', fundedOn: 1976 },
];

const newCompanies = companies.filter(empresas => empresas.fundedOn > 1975 && empresas.marketValue > 200);

console.log(newCompanies)

//empresas fundadas depois de 1975, e mais de 2m de dolares de valor de mercado