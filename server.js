
const nomes = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria', 'Luis', 'José', 'Danilo'];

const nomesLista = Array.from(new Set(nomes)); 
const nomesDuplicados = nomes.filter((nome, index) => nomes.indexOf(nome) !== index); 

console.log('Nomes duplicados:', nomesDuplicados);
console.log('Nomes lista:', nomesLista);