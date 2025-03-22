type PieceColor = 'white' | 'black'

class Piece{
    constructor(
        private color: PieceColor,
        private points: number
    ){
        this.color = color
        this.points = points
    }
    public move(){

    }
    public take(){

    }
}

class Queen extends Piece{
    constructor(color: PieceColor){
      super(color,9)
    }
    move(){
      console.log('V H D')
    }
    take(){
      this.move()
    }
}

const q1 = new Queen('black')