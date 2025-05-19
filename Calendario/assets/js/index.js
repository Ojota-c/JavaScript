document.querySelectorAll('form').forEach(f => f.addEventListener('submit', e => e.preventDefault()));
function meuEscopo() {

    const btnCalendario = document.getElementById('btn-Calendario');
    const btnRelogio = document.getElementById('btn-Relogio');
    const sectionCalendario = document.getElementById('section-calendario');
    const sectionRelogio = document.getElementById('section-relogio');    
    const form = document.querySelector('.form');

    const dataAtual = new Date();

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

    function gerarCalendario(mes, ano) {
        const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        const calendario = document.getElementById('calendario');
        let data = new Date(ano, mes, 1);
        let tabela = '<table><tr>';

        // Cabeçalho dos dias da semana
        for (let d of diasSemana) {
            tabela += `<th>${d}</th>`;
        }
        tabela += '</tr><tr>';

        // Espaços vazios até o primeiro dia do mês
        for (let i = 0; i < data.getDay(); i++) {
            tabela += '<td></td>';
        }

         // Dias do mês
        while (data.getMonth() === mes) {
            const isHoje =
                data.getDate() === new Date().getDate() &&
                data.getMonth() === new Date().getMonth() &&
                data.getFullYear() === new Date().getFullYear();

            if (isHoje) {
                tabela += `<td style="background: #409faf; color: #fff; border-radius: 50%;">${data.getDate()}</td>`;
            } else {
                tabela += `<td>${data.getDate()}</td>`;
            }

            if (data.getDay() === 6) tabela += '</tr><tr>';
            data.setDate(data.getDate() + 1);
        }

        tabela += '</tr></table>';
        calendario.innerHTML = tabela;
    }
    
    function atualizarRelogio() {
        const agora = new Date();
        const horas = agora.getHours().toString().padStart(2, '0');
        const minutos = agora.getMinutes().toString().padStart(2, '0');
        const segundos = agora.getSeconds().toString().padStart(2, '0');
        document.querySelector('.Horario2').value = `${horas}:${minutos}:${segundos}`;
    }
    
    const dataAtual2 = new Date();
    gerarCalendario(dataAtual2.getMonth(), dataAtual2.getFullYear());
    
    setInterval(atualizarRelogio, 1000);
    atualizarRelogio();

     btnCalendario.addEventListener('click', function () {
        if (sectionCalendario.style.display === 'none' || sectionCalendario.style.display === '') {
            sectionCalendario.style.display = 'block';
        } else {
            sectionCalendario.style.display = 'none';
        }
    });

    // Botão para abrir/fechar relógio
    btnRelogio.addEventListener('click', function () {
        if (sectionRelogio.style.display === 'none' || sectionRelogio.style.display === '') {
            sectionRelogio.style.display = 'block';
        } else {
            sectionRelogio.style.display = 'none';
        }
    });
}
meuEscopo();