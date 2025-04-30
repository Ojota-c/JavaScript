const nome = ' joão';// String
const nome1 = "joão";// String
const nome2 = `joão`;// String
const num1 = 10;// Number
const num2 = 10.52;// Number
let nomeAluno; // undefined = não aponta para lugar algum na memória
const sobrenomeAluno = null; // Nulo = não aponta para lugar algum na memória
const boolean = true; // Boolean = true ou false
const boolean2 = false; // Boolean = true ou false
const aprovado = true; // Boolean = true ou false (lógico) 
const a = [1,2];
const b = a; // Copia o valor de a para b, mas se alterar b, a não altera

console.log(a, b);

b.push(3); 
console.log(a,b); // Ambos vão ter o valor [1,2,3]
