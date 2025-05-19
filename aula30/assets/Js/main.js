document.querySelectorAll('form').forEach(f => f.addEventListener('submit', e => e.preventDefault()));
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function atualizarRelogio() {
    const h1Relogio = document.getElementById('Relogio');
    const dataAtual = new Date();

    const diasSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    const diaSemanaTexto = diasSemana[dataAtual.getDay()];

    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const mesTexto = meses[dataAtual.getMonth()];

    const dataTexto = dataAtual.getDate();
    const anoTexto = dataAtual.getFullYear();

    const horas = zeroAEsquerda(dataAtual.getHours());
    const minutos = zeroAEsquerda(dataAtual.getMinutes());
    const segundos = zeroAEsquerda(dataAtual.getSeconds());

    h1Relogio.innerText = `${diaSemanaTexto}, ${dataTexto} de ${mesTexto} de ${anoTexto} ${horas}:${minutos}:${segundos}`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio(); 
/*function recebeEventoH1(evento){
        evento.preventDefault();
    const diasSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']; const diasSemanaTexto = diasSemana[dataAtual.getDay()];
    const diaSemanaTexto = diasSemana[dataAtual.getDay()];
    form.querySelector('.DiaDaSemana').value = diaSemanaTexto;

    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const mesTexto = meses[dataAtual.getMonth()];
    form.querySelector('.Mes').value = mesTexto;

    form.querySelector('.Dia').value = dataAtual.getDate();

    form.querySelector('.Ano').value = dataAtual.getFullYear();

    const horas = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const segundos = dataAtual.getSeconds();
    const horarioFormatado = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    form.querySelector('.Horario').value = horarioFormatado;

    relogio.innerHTML = `${diaSemanaTexto},`;
    }

    h1.addEventListener('submit', recebeEventoH1);
    */