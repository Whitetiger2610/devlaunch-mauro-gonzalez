const prompt = require('prompt-sync')()

const DAYS_PER_MONTH = 30

const days = parseInt(prompt("Ingrese el número de días: "))

const months = Math.floor(days / DAYS_PER_MONTH)
const remainingDays = days % DAYS_PER_MONTH

console.log(`${days} days are ${months} months and ${remainingDays} days`)