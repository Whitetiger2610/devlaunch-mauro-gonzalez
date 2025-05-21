// Sum exercise

const arraySum = (arr1: number[], arr2: number[]): number[] =>{
  const result: number[] = []
  const maxLength = Math.max(arr1.length,arr2.length)

  for (let i = 0; i < maxLength; i++){
    const value1 = arr1[i] || 0
    const value2 = arr2[i] || 0
    result.push(value1 + value2)
  }

  return result
}

console.log(arraySum([1,0,2,3,4],[3,5,6,7,8,13,9]))