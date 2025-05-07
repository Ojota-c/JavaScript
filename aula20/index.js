/*
Primitivos (imutáveis)- string, number, boolean, null, undefined,
 symbol, bigint - Valor 

 Referencias (mutáveis) - array, object, function - Referência
*/
const a = {
   nome:'João',
   sobrenome:'Carlos'
};
const b = {...a};
a.nome = 'Barbosa';
console.log(a);
console.log(b);