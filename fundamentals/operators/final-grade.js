const prompt = require('prompt-sync')()

const GRADES_AMOUNT = 3
const MAX_DIGITS = 2

const gradeSubject1 = parseFloat(prompt("Ingrese la primera nota: "))
const gradeSubject2 = parseFloat(prompt("Ingrese la segunda nota: "))
const gradeSubject3 = parseFloat(prompt("Ingrese la tercera nota: "))

const averageGrade = (gradeSubject1 + gradeSubject2 + gradeSubject3)/GRADES_AMOUNT

console.log("La nota promedio es:",averageGrade.toFixed(MAX_DIGITS))

