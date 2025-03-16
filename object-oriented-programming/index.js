const name = "tiger"
const age = 3
const color = "black"

function getDog(){
  return {
    name: 'tiger',
    age: 3,
    color: 'black'
}
}
console.log(getDog())

const dog = {
    name: 'tiger',
    age: 3,
    color: 'black',
    owner:{
      firstName:'Mauro',
      lastName: 'gonzalez'
    },
    'Size Type': 'big',
    bark: () => {
      return console.log('🐕🐕🐕')
    }
}

console.log(dog.age)
dog.bark()
console.log(dog.owner.firstName)
console.log(dog['Size Type'])

console.log('1345'.length)

const cat = new Object()
cat.name = 'Mai'
cat.age =1
cat.color = 'orange'

console.log(cat)

// const prompt = require('prompt-sync')()

// const key = prompt("Que objeto quiere")

// console.log(dog[key])

const getPropertyValue = (object,key) =>{

  return object[key]

}

console.log(getPropertyValue(dog,'age'))

function Dog(){
  this.age = 3
  this.name = 'oreo'
 
}

const dog2 = new Dog()

console.log(dog.age)

const json = '{"name": "Anthony", "age":27}'

const person = JSON.parse(json)

console.log(person.age)

console.log(JSON.stringify(person))

const copy = {...person}
console.log(person)
