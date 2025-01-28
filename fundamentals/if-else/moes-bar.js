const prompt = require('prompt-sync')()

const birthdate = prompt("Cua es tu fecha de nacimiento en formato (YYYY/MM/DD)? ")


const birthday = new Date(birthdate)
const today = new Date()

let age = today.getFullYear() - birthday.getFullYear()

const birthdayPassed = (
  today.getMonth() > birthday.getMonth() ||
  (
    today.getMonth() === birthday.getMonth() &&
    today.getDate() >= birthday.getDate()
  )
)

if (!birthdayPassed){
  age--
}

if (age >= 18){
  console.log('Cumples con la edad legal para beber, Bienvenido al bar de Moe!')
} else if (age >= 0 && age <18) {
  console.log('No cumples la edad legal para beber, no puedes entrar al bar de Moe')
} else{
  console.error('Edad invalida')
}

