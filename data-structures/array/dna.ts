// DNA exercise

const dna: string = "gtggggggtttatgcctttagaacagacjgatetag"

const subsequence: string = 'aga'

const isSubsequenceInDNA = (dna:string, match: string) : boolean =>{
  let subsequence = ""

  for (let i = 0; i <= dna.length - match.length; i++){
    subsequence = dna.slice(i, i + match.length)
    if ( subsequence === match) return true
  }
  return false
}

console.log(isSubsequenceInDNA(dna,subsequence))