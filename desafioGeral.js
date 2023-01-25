
const companies = [
    { name: 'Sansung', marketValue: 50, CEO: 'Kim Hyun Suk', fundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', fundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanick', fundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zukerberg', fundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', fundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', fundedOn: 1976 },
];

// Primeiro exercicio--> Somar 10% a todas as companias no marketValue


const add10PorcentMarketValue = company => {
    company.marketValue += company.marketValue / 10 // Primeiro exercicio--> Somar 10% a todas as companias no marketValue
    return company
}
const oldCompanies = company => company.fundedOn < 2000  // Segundo exercicio --> filtrar somente as empresas mais antigas, ou seja somente antes do ano 2000.

const allOldCompaniesMarketValue = (acc, valorAtual) => acc + valorAtual.marketValue // Terceiro --> somar o valor das empresas antes do ano de 2000.

const myBestCompany = companies
    .map(add10PorcentMarketValue) // Primeiro exercicio--> Somar 10% a todas as companias no marketValue
    .filter(oldCompanies)         // Segundo exercicio --> filtrar somente as empresas mais antigas, ou seja somente antes do ano 2000.
    .reduce(allOldCompaniesMarketValue, 0) // Terceiro --> somar o valor das empresas antes do ano de 2000.

console.log(myBestCompany)





// Segundo exercicio --> filtrar somente as empresas mais antigas, ou seja somente antes do ano 2000.

const newCompanies = companies.filter(empresas => empresas.fundedOn < 2000);

//console.log(newCompanies)



