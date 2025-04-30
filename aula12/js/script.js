let num1 = prompt("Digite o primeiro número");
let sinal = prompt("Digite o sinal da operação desejada (+, -, *, /)");
let num2 = prompt("Digite o segundo número");


num1 = parseInt(num1);
num2 = Number(num2);

let resultado

if (sinal === "+") {
    resultado = num1 + num2;
} else if (sinal === "-") {
    resultado = num1 - num2;
} else if (sinal === "*") {
    resultado = num1 * num2;
} else if (sinal === "/") {
    if (num2 !== 0) { // Verifica divisão por zero
        resultado = num1 / num2;
    } else {
        alert("Erro: Divisão por zero não é permitida.");
        resultado = "Indefinido";
}
} else {
    alert("Erro: Sinal inválido.");
    resultado = "Indefinido";
}

alert(`O resultado da operção de ${num1} ${sinal} ${num2} é: ${resultado}`);	