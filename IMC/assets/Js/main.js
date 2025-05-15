function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const btnLimpar = document.getElementById('limpar');
    const Erro = document.querySelector('.Erro');
    const btnToggle = document.getElementById('abrir-fechar');
    const section = document.querySelector('.container');

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const peso = parseFloat(form.querySelector('.peso').value);
        const alturaInput = form.querySelector('.altura').value.replace(',', '.');
        let altura = parseFloat(alturaInput);

        if (!peso || !altura) {
        resultado.innerHTML = '';
        resultado.style.display = 'none';
        Erro.innerHTML = '❌ERRO: Preencha os campos de peso e altura!';
        Erro.style.display = 'flex';
        return;
    }

        if (altura > 3) {
            altura = altura / 100;
            // Verificação para altura máxima
            if (altura >= 2.5) {
                resultado.innerHTML = 'A altura deve ser no máximo 2.49 metros.';
                resultado.style.display = 'flex';
                return;
            } else (altura >= 2.5)
            resultado.innerHTML = '';
            resultado.style.display = 'none';
            Erro.innerHTML = `❌ERRO: O valor da altura deve ser menor que 2.5 Metros!`;
            Erro.style.display = 'flex';
            return;
        }
        


        const imc2 = peso / altura ** 2;
        let resultado2 = '';

        if (imc2 <= 18.5) {
            resultado2 = `Abaixo do peso!`
        } else if (imc2 >= 18.5 && imc2 <= 24.9) {
            resultado2 = `Peso normal`
        } else if (imc2 >= 25 && imc2 <= 29.9) {
            resultado2 = `Sobrepeso`
        } else if (imc2 >= 30 && imc2 <= 34.9) {
            resultado2 = `Obesidade grau 1`
        } else if (imc2 >= 35 && imc2 <= 39.9) {
            resultado2 = `Obesidade grau 2`
        } else if (imc2 >= 40) {
            resultado2 = `Obesidade grau 3`
        }

        resultado.innerHTML = `Seu IMC é ${imc2.toFixed(2)} (${resultado2})`;
        resultado.style.display = 'flex';
        Erro.innerHTML = '';
        Erro.style.display = 'none';
    }

    form.addEventListener('submit', recebeEventoForm);

    btnLimpar.addEventListener('click', function () {
        form.querySelector('.peso').value = '';
        form.querySelector('.altura').value = '';
        resultado.innerHTML = '';
        resultado.style.display = 'none';
        Erro.innerHTML = '';
        Erro.style.display = 'none';
    });

    btnToggle.addEventListener('click', function () {
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}
meuEscopo();