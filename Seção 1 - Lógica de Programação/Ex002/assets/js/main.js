function GetDayWeak (DayWeakParameter) {
    let DayWeakText;
    switch (DayWeakParameter) {
    case 0: DayWeakText = 'Domingo';
    return DayWeakText;
    case 1: DayWeakText = 'Segunda-feira'
    return DayWeakText;
    case 2: DayWeakText = 'Terça-feira';
    return DayWeakText;
    case 3: DayWeakText = 'Quarta-feira';
    return DayWeakText;
    case 4: DayWeakText = 'Quinta-feira';
    return DayWeakText;
    case 5: DayWeakText = 'Sexta-feira';
    return DayWeakText;
    case 6: DayWeakText = 'Sabádo'
    return DayWeakText;
    }
}
function GetMonth (MonthParameter) {
    let MonthText;
    switch (MonthParameter) {
    case 0: MonthText = 'Janeiro';
    return MonthText;
    case 1: MonthText = 'Fevereiro'
    return MonthText;
    case 2: MonthText = 'Março';
    return MonthText;
    case 3: MonthText = 'Abril';
    return MonthText;
    case 4: MonthText = 'Maio';
    return MonthText;
    case 5: MonthText = 'Junho';
    return MonthText;
    case 6: MonthText = 'Julho'
    return MonthText;
    case 7: MonthText = 'Agosto'
    return MonthText;
    case 8: MonthText = 'Setembro'
    return MonthText;
    case 9: MonthText = 'Outubro'
    return MonthText;
    case 10: MonthText = 'Novembro'
    return MonthText;
    case 11: MonthText = 'Dezembro'
    return MonthText;
    }
}
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

let resultado = document.querySelector('#res')
let data = new Date()
let day = data.getDate();
let semana = data.getDay();
let dataSemana = GetDayWeak(semana);
let mes = data.getMonth();
let dataMes = GetMonth(mes)
let dataAno = data.getFullYear();
let hora = zeroAEsquerda(data.getHours());
let minutes = zeroAEsquerda(data.getMinutes());
resultado.innerHTML = `${dataSemana}, ${day} de ${dataMes} de ${dataAno} ${hora}:${minutes}`