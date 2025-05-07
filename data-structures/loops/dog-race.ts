// dog race 🐾

const MAX_STEP = 3
const MIN_STEP = 1
const LINE_LENGTH = 20
const FINISH_LINE_POSITION = 0

// console.log("Pista Inicial")
// console.log("🏁|--------------------🐩")
// console.log("🏁|--------------------🦮")

// export const getRaceResult = () =>{
//   let dog1: string = "🏁|--------------------🐩"
//   let dog2: string = "🏁|--------------------🦮"
// }
// getRaceResult()

// const randomMove = (): number =>{
//   return Math.floor(Math.random()*MAX_STEP + MIN_STEP)
// }

// export const getRaceResult = () : void => {

//       let dog1: string = "🏁|--------------------🐩|"
//       let dog2: string = "🏁|--------------------🦮|"

//     for(let i = 0; i <= LINE_LENGTH; i++ ){

//       dog1.splice
//     }

// }

const moveDog = (position:number):number =>{
    const steps = Math.floor(Math.random() * MAX_STEP) + 1
    const newPosition = position - steps
    const isFinishLine = newPosition <= FINISH_LINE_POSITION
    return isFinishLine ? FINISH_LINE_POSITION : newPosition
}

const getLane = (laneLenght: number, dogPosition: number, dog: string): string => {
  let lane = '-'.repeat(laneLenght).split('')
  lane[dogPosition] = dog

  for (let i = laneLenght -1; i > dogPosition; i--){
    if (lane[i] === '-') lane[i] = '🐾'
  }
  return `🏁|${lane.join('')}|`
}

const dogsRace = ():void => {
  let dog1Position = LINE_LENGTH -1
  let dog2Position = LINE_LENGTH -1

  while (true){
    const isThereAWinner = (
      dog1Position <= FINISH_LINE_POSITION ||
      dog2Position <= FINISH_LINE_POSITION
    );

    if (isThereAWinner){
      const isDraw = dog1Position === dog2Position
      console.log(`Tenemos un ${isDraw ? 'empate':'ganador'}!`)
      break
    }

    dog1Position = moveDog(dog1Position)
    dog2Position = moveDog(dog2Position)

    const dogLane1 = getLane(LINE_LENGTH, dog1Position, '🦮')
    const dogLane2 = getLane(LINE_LENGTH, dog2Position, '🐩')

    console.log(`${dogLane1}\n${dogLane2}\n`)
  }
}

dogsRace()


