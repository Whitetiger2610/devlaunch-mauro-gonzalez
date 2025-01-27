const prompt = require('prompt-sync')()

const PRICE_PER_DAY = 100
const discount = 0.05

const nightQuantity = parseInt(prompt("Cuantas noches se hospedará en el hotel: "))
console.log(typeof nightQuantity)

const subtotal = PRICE_PER_DAY*nightQuantity

const invoice = subtotal * (1-discount)

console.log(`El valor de su factura es $ ${invoice}`)