function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;

    switch(diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
       return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'Segunda-Feira';
       return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'Terça-Feira';
       return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'Quarta-Feira';
       return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'Quinta-Feira';
       return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'Sexta-Feira';
       return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'Sabado';
       return diaSemanaTexto;
    default:
        diaSemanaTexto ='Erro'
    }
    

}
const data = new Date();
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

/*if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda-Feira';
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça-Feira'
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta-Feira'
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta-Feira'
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta-Feira'
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sabado'
} else if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo'
} else (diaSemana < 0 || diaSemana > 7) 
    diaSemanaTexto = 'Erro: Esse dia da semana não existe'
*/


console.log(diaSemana, diaSemanaTexto);
