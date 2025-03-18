import { getUserName } from './prompt'

const message: string = ''
let age : number

let a : boolean 

function test (a:number,b:number): string{
    return `${a+b}`
}

console.log("hola")
interface Account {
    id: number,
    name: string,
    balance: number,
    email?: string,
    deposit: (amount: number) => void
}

type Exchange = 'dollar' | 'colon'

const createAccount = (id: number, name:string, balance: number = 0, exchange: Exchange):Account =>{
    return {
        id,
        name,
        balance,
        deposit: (amount) =>{
            console.log("first")
        }
    }
}


const acc1  = createAccount(1,'',100, 'colon')



const name = getUserName()