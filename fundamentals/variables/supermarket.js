const marketName = "GreenCenter"

const favorite1 = "manzanas"
const favorite2 = "naranjas"

const areBananasAvailable = false
const areGrapesAvailable = false

const activeCashiers = 3

const currency = '$'
const totalPrice = 100
const cash = 150

const change = cash - totalPrice

console.log(`
    Supermercado : ${marketName}
    Precio total = ${currency}${totalPrice}
    Disponible efectivo = ${currency}${cash}
    Cambio: ${currency}${change}
    `)
