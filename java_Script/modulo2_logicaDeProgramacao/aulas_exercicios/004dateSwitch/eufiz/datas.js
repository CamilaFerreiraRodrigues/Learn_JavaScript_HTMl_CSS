
//usando switch e obj data
/*
const data = new Date();
const h1 = document.querySelector('#data h1');

const semana= diaSemana(data.getDay());
const atualMes= mesAtual(data.getMonth());



h1.innerHTML = `${semana}, ${data.getDate()} de ${atualMes} de ${data.getFullYear()}  ${data.getHours()}: ${data.getMinutes()}`


function diaSemana (a){
    const day = a;
    let dayName;

    switch (day) {

        case 0: 
            dayName = 'Domingo'; 
            return dayName;
            break;

        case 1:
            dayName = 'Segunda-feira';
            return dayName;
            break

        case 2:
            dayName = 'Terça- feira';
            return dayName;
            break;

        case 3:
            dayName = 'Quarta-feira';
            return dayName;
            break;

        case 4:
            dayName = 'Quinta-feira';
            return dayName;
            break;

        case 5:
            dayName = 'Sexta-feira';
            return dayName;
            break;
        
        case 6:
            dayName = 'Sábado';
            return dayName;
            break;

    }

}

function mesAtual (b){
    const month = b;
    let monthName;

    switch (month) {

        case 0: 
            monthName = 'January'; 
            return monthName;
            break;

        case 1:
            monthName = 'february';
            return monthName;
            break

        case 2:
            monthName = 'March';
            return monthName;
            break;

        case 3:
            monthName = 'April';
            return monthName;
            break;

        case 4:
            monthName = 'May';
            return monthName;
            break;

        case 5:
            monthName = 'June';
            return monthName;
            break;
        
        case 6:
            monthName = 'July';
            return monthName;
            break;

        case 7:
            monthName = 'Agost';
            return monthName;
            break;


        case 8:
            monthName = 'Setember';
            return monthName;
            break;


        case 9:
            monthName = 'October';
            return monthName;
            break;

        case 10:
            monthName = 'November';
            return monthName;
            break;
        case 11:
            monthName = 'December';
            return monthName;
            break;


    }
}
*/

// resolvendo o mesmo problema usando array --- poucas linhas

const data = new Date();
const h1 = document.querySelector('#data h1');

const numero = data.getDay()
const numero2 = data.getMonth()
const diaSemana = nomeSemana(numero);
const mes = nomeMes(numero2);

h1.innerHTML = `${diaSemana}, ${data.getDate()} de ${mes} de ${data.getFullYear()} ${data.getHours()}: ${data.getMinutes()} `

function nomeSemana (numeroSemana){
    const diasDaSemana = [domingo, segunda, terça, quarta, quinta, sexta, sábado];
    return diasDaSemana[numeroSemana];
}

function nomeMes(numeroMes){
    const mesAtual = [jan, fev, mar, abr, mai, jun, jul, ago, set, nov, nov, dez]
    return mesAtual[numeroMes];
}

console.log(diaSemana)