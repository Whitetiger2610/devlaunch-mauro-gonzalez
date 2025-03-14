
const prompt = require('prompt-sync')()

const REGULAR_HOURS = 8;
const EXTRA_HOUR_MULTIPLIER  = 1.5;

function getDailyPayment(startTime,endTime,hourlyRate){

    const [startHour] = startTime.split(':')
    const [endHour] = endTime.split(':')
    const workedHours = endHour - startHour
    let payment = 0

    console.log(workedHours)
    if (workedHours <= REGULAR_HOURS){
        payment = workedHours * hourlyRate
        return payment
    } else{
        const extraHours = workedHours-REGULAR_HOURS
        payment = REGULAR_HOURS *hourlyRate + extraHours*hourlyRate*EXTRA_HOUR_MULTIPLIER
        return payment
    }

}

const main = (()=> {

    const startTime = prompt("Hora de entrada: ")
    const endTime = prompt("Hora de salida: ")
    const hourlyRate = parseFloat(prompt("Tarifa por hora: "))

    console.log("El pago de hoy es: $ ", getDailyPayment(startTime,endTime, hourlyRate))
}
)

main()