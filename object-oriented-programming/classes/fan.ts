type FanSize = 'small' | 'medium' | 'large'
type FanColor = 'white' | 'black' | 'gray'
type FanType = 'stand' | 'wall' | 'roof'
type FanSpeed = 0 | 1 | 2 | 3

class Fan{
    constructor(
        public brand:string,
        private type: FanType,
        private color: FanColor,
        private speed: FanSpeed,
        private size: FanSize,
        private power: number,
    ){
      this.brand = brand
      this.type = type
      this.color = color
      this.speed = 0
      this.size = size
      this.power = power
    }

    getType(){
      return this.type     
    }
    setType(newType: FanType){
      this.type = newType
    }
    getColor(){
      return this.color     
    }
    setColor(newColor: FanColor){
      this.color = newColor
    }
    getSpeed(){
      return this.speed     
    }
    setSpeed(newspeed: FanSpeed){
      this.speed = newspeed
    }
    getSize(){
      return this.size     
    }
    setSize(newsize: FanSize){
      this.size = newsize
    }
    getPower(){
      return this.power     
    }
    setPower(newpower: number){
      this.power = newpower
    }
}

const fan1 = new Fan ("Sanyo", 'wall', 'white', 3, 'medium', 100 )

fan1.setType('stand')
fan1.setSize('small')
fan1.setColor('gray')
fan1.setSpeed(2)
fan1.setPower(200)

console.log(fan1.getType())
console.log(fan1.getSize())
console.log(fan1.getColor())
console.log(fan1.getSpeed())
console.log(fan1.getPower())