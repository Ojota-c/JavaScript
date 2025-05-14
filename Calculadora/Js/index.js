function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const calculadora = [];
    function recebeEventoForm(evento) {
        evento.preventDefault();

        const num1 = parseFloat(form.querySelector('.Numero').value);
        const sinal = form.querySelector('.Sinal').value;
        const num2 = parseFloat(form.querySelector('.Numero2').value);

        let calculo;

        // Lógica da calculadora com if e else if
        if (sinal === '+') {
            calculo = num1 + num2;
        } else if (sinal === '-') {
            calculo = num1 - num2;
        } else if (sinal === '*') {
            calculo = num1 * num2;
        } else if (sinal === '/') {
            if (num2 !== 0) {
                calculo = num1 / num2;
            } else {
                calculo = 'Erro: Divisão por zero';
            }
        } else {
            calculo = 'Operador inválido';
        }

        // Adiciona o cálculo ao array
        calculadora.push({ num1, sinal, num2, resultado: calculo });

        // Exibe o resultado na página
        resultado.innerHTML = `Resultado: ${calculo}`;
        console.log(calculadora);
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();