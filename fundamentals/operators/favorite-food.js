const prompt = require('prompt-sync')()

const name1 = prompt("Nombre primera persona: ")
const favoriteFood1 = prompt("Comida favorita primera persona: ")

const name2 = prompt("Nombre segunda persona: ")
const favoriteFood2 = prompt("Comida favorita segunda persona: ")

const name3 = prompt("Nombre tercera persona: ")
const favoriteFood3 = prompt("Comida favorita tercera persona: ")

const condition1 = favoriteFood1 === favoriteFood2 && favoriteFood1 === favoriteFood3
const condition2 = favoriteFood1 === favoriteFood2 || favoriteFood1 === favoriteFood3
const condition3 = favoriteFood1 !== favoriteFood2 && favoriteFood1 !== favoriteFood3

console.log(`Does ${name1} share the same favorite food as both ${name2} and ${name3}: ${condition1}`)
console.log(`Does ${name1}'s favorite food match either ${name2}'s or ${name3}'s: ${condition2}`)
console.log(`Does ${name1}'s preference differ from both ${name2}'s and ${name3}'s: ${condition3}`)

