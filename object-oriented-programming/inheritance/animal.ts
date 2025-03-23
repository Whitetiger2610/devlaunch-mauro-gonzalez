
class Animal{
    constructor(
      private name:string,
      private specie: string,
      private age : number
    ){
      this.name = name
      this.specie = specie
      this.age = age
    }
    public getName(){
      return this.name
    }
    public setName(name:string){
      this.name = name
    }
    public getSpecie(){
      return this.specie
    }
    public setSpecie(specie:string){
      this.specie = specie
    }
    public getAge(){
      return this.age
    }
    public setAge(age:number){
      this.age = age
    }

    makeSound():string{
      return 'sound'
    }
    toString():string{
      return `Nombre : ${this.name}\n Especie: ${this.specie}\n Edad: ${this.age}
      `
    }
}

type HairLenght = 'pequeña' | 'mediana' | 'larga'

class Lion extends Animal{
    private hair : HairLenght
  constructor(name:string,specie:string,age:number, hair: HairLenght)
  {
    super(name,specie,age)
    this.hair = hair
  }
  makeSound():string{
    return 'Grrrrr'
  }
  print(): string {
    const info = this.toString()
    return `Tipo de melena ${this.hair}\n ${info}`
  }
}

type SizeType = 'pequeño' | 'mediano' | 'grande'

class Elephant extends Animal{
  
  constructor(
    name:string,
    specie:string,
    age:number, 
    private size: SizeType)
  {
    super(name,specie,age)
    this.size = size
  }
  makeSound(){
    return 'Phrrrrrr'
  }

  print(){
    const info = this.toString()
    return `${info}\n Tamaño: ${this.size}`
  }
}

const lion1 = new Lion('mufasa','felino',10, 'mediana')
const elephant1 = new Elephant('Grand', 'paquiderm', 15, 'grande')

console.log(lion1.makeSound())
lion1.setAge(12)
console.log(lion1.print())

console.log(elephant1.makeSound())
elephant1.setAge(15)
console.log(elephant1.print())
