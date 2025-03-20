type DogColor = 'black' | 'white'

// function createDog(name:string,age:number, color: DogColor){
//     return{
//         name,
//         age,
//         color,
//         sleep:()=>{
//             console.log('zzz..')
//         }
//     }
// }

// const d1 = createDog('oreo',3,'black')

// function Dog(name:string, age:number, color: DogColor){
//     this.name = name
//     this.age= age
//     this.color = color
//     return this
// }

// // @ts-ignore
// const d1 = new Dog('oreo',3,'white')

interface Address{
    city: string
    state: string
}
class Person{
    constructor(public name:string, public address: Address){
        this.name = name
    }
}

class Dog{
   
    private age: number

    constructor(private name:string = '', public color: DogColor = 'black', public owner:Person){
        this.name = name
        this.age = 0
        this.color = color
        this.owner = owner
    }

    public getAge =():number =>{
        return this.age
    }
    public setAge =(age:number):void =>{
        this.age = age
    }

    private cry = ()=>{
        console.log('<<>>>')   
        console.log('I want to be in my city ', this.owner.address.city) 
    }

    public bark = ()=>{
        console.log('Gua Gua') 
        console.log(this.name)
        console.log(this.owner.name)
        this.cry()   
    }
}

const p1 = new Person('Mauricio',{city:'Medelln',state:'Antioquia'})
const d1 = new Dog('oreo', "black",p1)
d1.bark()



