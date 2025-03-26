import promptSync from 'prompt-sync'

const prompt = promptSync();

const maxNumberForIteration: number = parseInt(prompt('Ingrese valor maximo de iteración: '))

const classifyNumbers = (max: number)=>{
  let result = ''
    // let i = 1
    // while (i <= max){
    //   const isOdd = i % 2 === 0
    //     if (isOdd){
    //         result += `${i} is even \n`
    //     } else{
    //         result += `${i} is odd \n`
    //     }
    //     i++
    // }
    
    for (let i = 1; i <= max; i++) {
          const isOdd = i % 2 === 0
          result += `${i} is ${isOdd ? 'odd' : 'even'} \n`
        // if (isOdd) {
        //     result += `${i} is even \n`
        // } else {
        //     result += `${i} is odd \n`
        // }
    }

    return result

}

console.log(classifyNumbers(maxNumberForIteration))