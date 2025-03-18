
interface Fraction{
    numerator: number
    denominator: number
}

type FractionOperation = (f2:Fraction) => Fraction

interface FractionWithOperations extends Fraction{
    add: FractionOperation
    sub: FractionOperation
    mul: FractionOperation
    div: FractionOperation

}


const createfraction = (numerator:number,denominator:number):Fraction => {

        return{
            numerator,
            denominator
        }
}

function add(fraction1: Fraction,fraction2: Fraction):Fraction{
   
    const num = fraction1.numerator*fraction2.denominator + fraction2.numerator*fraction1.denominator
    const den = fraction1.denominator * fraction2.denominator
    return createfraction(num,den)
    
}
function sub(fraction1:Fraction,fraction2:Fraction): Fraction{
   
    const num = fraction1.numerator*fraction2.denominator - fraction2.numerator*fraction1.denominator
    const den = fraction1.denominator * fraction2.denominator
    
    return createfraction(num,den)
}
function mul(fraction1:Fraction,fraction2:Fraction): Fraction{
   
    const num = fraction1.numerator * fraction2.numerator
    const den = fraction1.denominator * fraction2.denominator
    
    return createfraction(num,den)
}
function div(fraction1:Fraction,fraction2: Fraction): Fraction{
   
    const num = fraction1.numerator * fraction2.denominator
    const den = fraction1.denominator * fraction2.numerator
    
    return createfraction(num,den)
}


const createFractionWithFunctions = (num:number,den:number) : FractionWithOperations=>{
    const f1 = createfraction(num,den)
    return{
        ...f1,
        add: (f2:Fraction)=>add(f1,f2),
        sub: (f2: Fraction)=>sub(f1,f2),
        mul: (f2: Fraction)=>mul(f1,f2),
        div: (f2: Fraction)=>div(f1,f2),
    }
}


const fraction3 = createfraction(3,4)
const fraction4 = createfraction(2,3)

console.log(fraction3)
console.log(fraction4)
console.log("Suma: ", add(fraction3,fraction4))
console.log("Resta: ", sub(fraction3,fraction4))
console.log("Multiplicacion: ", mul(fraction3,fraction4))
console.log("Division: ", div(fraction3,fraction4))

console.log("operaciones con objetos 3")
const fraction5 = createFractionWithFunctions(3,4)
const fraction6 = createfraction(2,3)


console.log(fraction5.add(fraction6))
console.log(fraction5.sub(fraction6))
console.log(fraction5.mul(fraction6))
console.log(fraction5.div(fraction6))