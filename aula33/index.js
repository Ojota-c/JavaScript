const pessoa ={
    nome: 'João Carlos',
    sobrenome: 'Barbosa',
    idade: 22,
    endereco: {
        rua: 'Rua 21',
        bairro: 'Jardim Goias',
        numero: 8
    }
}
// Atribuição via desestruturação
const{ nome, sobrenome, idade} = pessoa;

console.log(nome, sobrenome, idade);