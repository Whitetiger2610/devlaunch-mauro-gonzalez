const prompt = require('prompt-sync')()

const name = prompt("Nombre: ")
const height = parseFloat(prompt("Altura: "))
const weight = parseFloat(prompt("Peso: "))

const imc = (weight / Math.pow(height,2)).toFixed(2)

console.log(`Hi ${name}, your BMI is ~${imc}`)