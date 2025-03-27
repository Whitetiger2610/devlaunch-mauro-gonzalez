
// function countVowels(text: string) {
//     let Vowel = {
//         total: 0,
//         a: 0,
//         e: 0,
//         i: 0,
//         o: 0,
//         u: 0
//     }

//     for (let i = 0; i <= text.length; i++) {

        // if (text[i] === 'a' || text[i] === 'A'){
        //     Vowel.a ++ 
        //     Vowel.total ++
        // }
        // if (text[i] === 'e' || text[i] === 'E'){
        //     Vowel.e ++
        //     Vowel.total ++
        // }
        // if (text[i] === 'i' || text[i] === 'I'){
        //     Vowel.i ++
        //     Vowel.total ++
        // }
        // if (text[i] === 'o' || text[i] === 'O'){
        //     Vowel.o ++
        //     Vowel.total ++
        // }
        // if (text[i] === 'u' || text[i] === 'U'){
        //     Vowel.u ++
        //     Vowel.total ++
        // }
//     }

//     return Vowel

// }

interface VowelCount {
    [key: string]: number
}

const isVowel = (letter: string): boolean => {
    return (
        letter === 'a' ||
        letter === 'e' ||
        letter === 'i' ||
        letter === 'o' ||
        letter === 'u'
    )
}

const countVowels = (input: string): VowelCount => {
    const vowelCount: VowelCount = {
        total: 0,
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    }
    for (let i = 0; i < input.length; i ++){
        const letter = input.toLowerCase()[i]
        if (isVowel(letter)){
            vowelCount[letter] ++
            vowelCount.total ++
        }
    }
    return vowelCount
}

console.log(countVowels("Hello, World!"))