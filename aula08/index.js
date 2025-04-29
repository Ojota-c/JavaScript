/*
João Carlos Barbosa tem 23 anos, pesa 64 kg
tem 1.78 de altura e seu IMC é de 20.2
João Carlos nasceu em 2002
*/
const nome = 'João Carlos';
const sobrenome = 'Barbosa';
const idade = 23;
const peso = 64;
const alturaEmM = 1.78;
const anoAtual = 2025;
let imc;// peso / (altura * altura)
let anoNascimento;
imc = peso / (alturaEmM * alturaEmM);
anoNascimento = anoAtual - idade;

// template strings ${variavel} 

console.log(` ${nome} ${sobrenome} tem ${idade} anos,pesa ${peso} kg e tem ${alturaEmM} de altura e seu IMC é de ${imc} 
 ${nome} ${sobrenome} nasceu em ${anoNascimento}`)