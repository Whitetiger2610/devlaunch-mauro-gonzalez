const gymName = "Elite Fitness Center"
const gymType = 'boutique'

const city = "Palo Alto"
const state = "California"

const membershipPrice = 150
const currency = "$"
const duration = "mensual"

const openTime = 6
const closeTime = 22

const trainersAmount = 10

const amenities = ["sauna", "piscina","clases grupales"]

console.log(`
    Gimnasio: ${gymName}
    Tipo de gimnasio = ${gymType}\n
    Ubicación: ${city}, ${state}\n
    Horario de apertura: ${openTime}:00 AM
    Horario de cierra: ${closeTime - 12}:00 PM \n
    Costo de membresía : ${currency}${membershipPrice}/${duration}
    Servicios:
            - ${amenities[0]}
            - ${amenities[1]}
            - ${amenities[2]} 
    Cuenta con ${trainersAmount} entrenadores certificados
    `)