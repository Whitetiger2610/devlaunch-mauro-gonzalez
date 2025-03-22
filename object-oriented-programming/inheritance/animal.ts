
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

    public sound(){
      console.log('sound')
    }
    public displayInfo(){
      console.log('Nombre : ',this.name)
      console.log('Especie: ',this.specie)
      console.log('Edad: ',this.age)
    }
}

type HairLenght = 'small' | 'medium' | 'large'

class Lion extends Animal{
    private hair : HairLenght
  constructor(name:string,specie:string,age:number, hair: HairLenght)
  {
    super(name,specie,age)
    this.hair = hair
  }
  sound(){
    console.log('Grrrrr')
  }
}

type SizeType = 'small' | 'medium' | 'large'

class Elephant extends Animal{
  private size: SizeType
  constructor(name:string,specie:string,age:number, size: SizeType)
  {
    super(name,specie,age)
    this.size = size
  }
  sound(){
    console.log('Brrrrrr')
  }
}