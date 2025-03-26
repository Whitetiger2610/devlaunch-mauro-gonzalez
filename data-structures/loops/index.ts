import promptSync from 'prompt-sync'

const prompt = promptSync();

// Loops

//For

for(let i = 1; i<= 10; i++){
    console.log(i)
}
console.log('finish')

// for(let i = 10; i>= 1; i-=2){
//     console.log(i)
// }
// console.log('finish')

//While
console.log('\n')

let counter = 0
while (counter <= 10){
    console.log(counter)
    counter++
}

console.log('\n')

let i = 0
let shouldContinue = true

while (shouldContinue){
    const userInput = prompt('Should i stop (y/n): ')
    const shouldStop = userInput === 'y'

    if (shouldStop){
        shouldContinue = false
    } else {
        console.log(i)
    }
    i++
}

// Do while

let j = 0
let shouldContinue2 = true

do {
    const userInput = prompt('2: Should i stop? (y/n): ')
    const shouldStop = userInput === 'y'

    if (shouldStop){
        shouldContinue2 = false
    } else {
        console.log(j)
    }
    i++

}
while(shouldContinue2)

