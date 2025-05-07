function criarPessoa(nome,sobrenome,idade){
    return {
        nome,
        sobrenome,
        idade,
        getDados(){
            return `${this.nome} ${this.sobrenome} ${this.idade}`
        }
    }
}

const pessoa1 = criarPessoa('João', 'Barbosa', 22)
const pessoa2 = criarPessoa('Jessica', 'Berti', 28)
const pessoa3 = criarPessoa('Ana', 'Julia', 8)
const pessoa4 = criarPessoa('Nilza', 'Barbosa', 56)
console.log(pessoa1.getDados())
console.log(pessoa2.getDados())
console.log(pessoa3.getDados())
console.log(pessoa4.getDados())