

interface AccountShape{
  id:number
  holderName:string
  balance:number
  deposit: (amount:number) => void
  withdraw: (amount:number) => number | null
  transfer: (account: AccountShape, amount: number) => AccountShape | null
}

function Account(id:number,holderName:string, balance:number =0): AccountShape {
    this.id = id
    this.holderName = holderName
    this.balance = balance

   this.deposit = (amount:number) =>{
      this.balance += amount
   }
   this.withdraw = (amount:number)=>{
    if (this.balance >= amount){
      this.balance-= amount
      return amount 
   }
   return null
  }
  this.transfer = (toAccount: AccountShape, amount:number) => {
    const cash = this.withdraw(amount)
    if (cash){
      toAccount.deposit(cash)
      return toAccount
    }
    return null
   }
  return this
}


const account1: AccountShape  = new (Account as any)(1,"Mauricio", 10000)

account1.deposit(1000)
console.log(account1)
console.log(account1.withdraw(5000))
console.log(account1)

const account2: AccountShape  = new (Account as any)(1,"Mario", 20000)

console.log(account1.transfer(account2,5000))

console.log(account1)