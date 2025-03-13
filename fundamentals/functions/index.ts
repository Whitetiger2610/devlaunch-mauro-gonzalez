function getMinExhange(
    money:number,
    bills: number[] = [20,10,5,1],
    coins:number[] = [0.25,0.1,0.05,0.01]
){

    const denominations = [...bills, ...coins].sort((a,b) => a+b)
    console.log(denominations)
}

getMinExhange(6.35)