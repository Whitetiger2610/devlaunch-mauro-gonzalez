

function Account(id,holderName, balance =0) {
    this.id = id
    this.holderName = holderName
    this.balance = balance

   this.deposit = (amount) =>{
      this.balance += amount
   }
   this.withdraw = (amount)=>{
    if (this.balance >= amount){
      this.balance-= amount
      return amount 
   }
   return null
  }
  this.transfer = (toAccount,amount) => {
    const cash = this.withdraw(amount)
    if (cash){
      toAccount.deposit(cash)
      return toAccount
    }
    return null
   }
  return this
}

const account1 = new Account(1,"Mauricio",10000)
account1.deposit(1000)
console.log(account1)
console.log(account1.withdraw(5000))
console.log(account1)

const account2 = new Account(2,"Mario")

console.log(account1.transfer(account2,5000))

console.log(account1)