const prompt = require('prompt-sync')()

const n = parseFloat(prompt("Ingrese un numero: "))

let message

if (n > 0){
  message = console.log("Positivo")
} else if(n < 0){
  message = console.log('Negativo')
} else if(n === 0){
  message = console.log('Cero')
} else {
  message = console.log('Por favor, introduce un numero válido')
}


