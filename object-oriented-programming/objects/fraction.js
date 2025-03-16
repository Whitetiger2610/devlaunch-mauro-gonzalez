
function Fraction (num,den){
    this.numerator = num
    this.denominator = den

    this.add = (fraction)=>{
        if (this.denominator > 0 && fraction.denominator >0){
            const addNum = this.numerator*fraction.denominator + fraction.numerator*this.denominator
            const addDen = this.denominator * fraction.denominator
            const add = new Fraction(addNum,addDen)
            return add
        }
    }
    this.sub = (fraction)=>{
        if (this.denominator > 0 && fraction.denominator >0){
            const subNum = this.numerator*fraction.denominator - fraction.numerator*this.denominator
            const subDen = this.denominator * fraction.denominator
            const sub = new Fraction(subNum,subDen)
            return sub
        }
    }
    this.mul = (fraction)=>{
        if (this.denominator > 0 && fraction.denominator >0){
            const mulNum = this.numerator * fraction.numerator
            const mulDen = this.denominator * fraction.denominator
            const mul = new Fraction(mulNum,mulDen)
            return mul
        }
    }
    this.div = (fraction)=>{
        if (this.denominator > 0 && fraction.denominator >0){
            const divNum = this.numerator * fraction.denominator
            const divDen = this.denominator * fraction.numerator
            const div = new Fraction(divNum,divDen)
            return div
        }
    }
}

console.log("operaciones con objetos 1")
const fraction1 = new Fraction(3,4)
const fraction2 = new Fraction(2,3)

console.log("Suma: ", fraction1.add(fraction2))
console.log("Resta: ",fraction1.sub(fraction2))
console.log("Multiplicacion: ",fraction1.mul(fraction2))
console.log("Division: ",fraction1.div(fraction2))

console.log("operaciones con objetos 2")

function createfraction(numerator,denominator){

    if(denominator !== 0){
        return{
            numerator,
            denominator
        }
    }
    return false
}

function add(fraction1,fraction2){
   
    const num = fraction1.numerator*fraction2.denominator + fraction2.numerator*fraction1.denominator
    const den = fraction1.denominator * fraction2.denominator
    return createfraction(num,den)
    
}
function sub(fraction1,fraction2){
   
    const num = fraction1.numerator*fraction2.denominator - fraction2.numerator*fraction1.denominator
    const den = fraction1.denominator * fraction2.denominator
    
    return createfraction(num,den)
}
function mul(fraction1,fraction2){
   
    const num = fraction1.numerator * fraction2.numerator
    const den = fraction1.denominator * fraction2.denominator
    
    return createfraction(num,den)
}
function div(fraction1,fraction2){
   
    const num = fraction1.numerator * fraction2.denominator
    const den = fraction1.denominator * fraction2.numerator
    
    return createfraction(num,den)
}

const createFractionWithFunctions = (num,den)=>{
    const f1 = createfraction(num,den)
    return{
        ...f1,
        add: (f2)=>add(f1,f2),
        sub: (f2)=>sub(f1,f2),
        mul: (f2)=>mul(f1,f2),
        div: (f2)=>div(f1,f2),
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