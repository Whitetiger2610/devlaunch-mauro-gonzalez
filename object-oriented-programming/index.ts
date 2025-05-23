// Simula la interacción entre una tarjeta de crédito y un cajero automático. El usuario puede insertar su tarjeta, verificar su saldo, hacer compras o pagos, y retirar dinero (si está dentro del límite).



class ATM {
  private bills: {
    [key: number]: number
  }
  private total: number
  constructor() {
    this.bills = {
      100: 100,
      50: 100,
      20: 100,
      10: 100,
      5: 100,
    }
    this.total = Object.keys(this.bills).reduce((total, key) => (
      total + this.bills[parseInt(key)] * parseInt(key)
    ), 0)
  }

  withdrawl(card: CreditCard, amount: number): number {
    if (card.amountAvailable >= amount) {
      if (amount === 100 || amount === 50 || amount === 20 || amount === 10 || amount === 5) {

        this.bills[amount] -= 1
        card.substract(amount)
        console.log("Cantidad disponible en la tarjeta: ",card.amountAvailable)
        return amount
      }
    }
    return -1

  }

  print(): void {
    console.log(`EL total de cajero: ${this.total}`)
  }

}

const atm1 = new ATM()

atm1.print()

class CreditCard {
  public amountAvailable: number
  public amountSpent: number

  constructor(available: number, spent: number) {
    this.amountAvailable = available
    this.amountSpent = spent
  }

  substract(amount: number) {
    this.amountAvailable -= amount
  }

}

const card1 = new CreditCard(1000,0)

atm1.withdrawl(card1,100)