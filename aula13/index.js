let varA = 'A';//b
let varB = 'B';//c
let varC = 'C';//a
let temp = varA; //temp = a

varA = varB;
varB = varC;
varC = temp;

console.log(varA, varB, varC);