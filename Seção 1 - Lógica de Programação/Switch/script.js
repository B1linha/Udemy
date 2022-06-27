// Usando switch

function GetDayWeak (DayWeakParameter) {
    let DayWeakText;
    switch (DayWeakParameter) {
    case 0: DayWeakText = 'Domingo';
    return DayWeakText;
    case 1: DayWeakText = 'Segunda'
    return DayWeakText;
    case 2: DayWeakText = 'Terça';
    return DayWeakText;
    case 3: DayWeakText = 'Quarta';
    return DayWeakText;
    case 4: DayWeakText = 'Quinta';
    return DayWeakText;
    case 5: DayWeakText = 'Sexta';
    return DayWeakText;
    case 6: DayWeakText = 'Sabádo'
    return DayWeakText;
    }
}
let day = new Date(); 
let DayWeak = day.getDay();
let GetDayWeakText = GetDayWeak(DayWeak);

console.log (DayWeak, GetDayWeakText)
