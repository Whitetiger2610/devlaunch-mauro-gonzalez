abstract class Pokemon {
  constructor(
    public name: string,
    public health: number = 100
  ) {
    this.name = name
    this.health = health
  }
  // attack(nameAttack: string, opponent: Pokemon, damage: number) {
  //   if (this.isAlive()) {
  //     if (opponent.health < damage) {
  //       opponent.health = 0
  //     } else {
  //       opponent.health -= damage
  //     }
  //   }
  // }
  isAlive(): boolean {
    return this.health > 0
  }
  receiveDamage(damage: number) {
    if (this.health < damage) {
      this.health = 0
    } else {
      this.health -= damage
    }
  }
}

// type attacksPikachu = 'thunderShok' | 'quickAttack' 

class Pikachu extends Pokemon {
  constructor() {
    super('pikachu')
  }

  thunderShock(opponent: Pokemon) {

    if (this.isAlive()) {
      const damage = 20
      opponent.receiveDamage(damage)
    }
  }
}

class Charizard extends Pokemon {
  constructor() {
    super('charizard')
  }
  flameThrower(opponent: Pokemon) {
    if (this.isAlive()) {
      const damage = 30
      opponent.receiveDamage(damage)
    }
  }
}

const pickachu1 = new Pikachu()
console.log(pickachu1)
const charizard1 = new Charizard()
console.log(charizard1)
console.log('Ataque 1', pickachu1.name)
pickachu1.thunderShock(charizard1)
// pickachu1.attack('thunderShock', charizard1, 20)
console.log(charizard1.name, 'health : ', charizard1.health)
console.log('Ataque 2', charizard1.name)
charizard1.flameThrower(pickachu1)
console.log(pickachu1.name, 'health : ', pickachu1.health)
pickachu1.thunderShock(charizard1)
// pickachu1.attack('thunderShock', charizard1, 20)
charizard1.flameThrower(pickachu1)
// pickachu1.attack('thunderShock', charizard1, 20)
pickachu1.thunderShock(charizard1)
charizard1.flameThrower(pickachu1)
// pickachu1.attack('thunderShock', charizard1, 20)
pickachu1.thunderShock(charizard1)
charizard1.flameThrower(pickachu1)
console.log(pickachu1.name, 'health : ', pickachu1.health)
console.log(charizard1.name, 'health : ', charizard1.health)

