class Vehicle{
  private isOn : boolean
  constructor(
    protected emoji: string,
    protected brand: string,
    protected model: string,
    protected year: number
  ){
    this.emoji = emoji
    this.brand = brand
    this.model = model
    this.year = year
    this.isOn = false
  }

  run(){
    this.isOn = true
  }
  toString():string{
    return `Emoji : ${this.emoji}\nBrand:${this.brand}\nModel:${this.model}\nYear:${this.year}
    `
  }
}

class Car extends Vehicle{
  private isAirOn: boolean
  constructor(
    brand: string,
    model: string,
    year: number,
    private numofDoors : number = 4,
  ){
    super('🚙', brand,model,year)
    this.isAirOn = false
  }
}

class Motorcycle extends Vehicle{
  
  constructor(
    brand: string,
    model: string,
    year: number,
  ){
    super('🏍️', brand,model,year)
  }
  wheelie(){
    return '🛞'
  }
}

const car1 = new Car('Toyota', 'Tucson', 2021)
const mtc1 = new Motorcycle('Yamaha', 'T40', 2021)

console.log(car1.toString())
console.log(mtc1.toString())