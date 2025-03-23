type InstrumentTyoe = 'viento' | 'cuerda' | 'percusión'

abstract class Instrument{
  constructor( public type: InstrumentTyoe){
  }
  play(){}
}

class Guitar extends Instrument{
  constructor(){
    super('cuerda')
  }
  play(){
    console.log('🎸 Strum Strum')
  }
}

class Flute extends Instrument{
  constructor(){
    super('viento')
  }
  play(){
    console.log(' 🪈 Toot toot tooot ...')
  }
}

class Drums extends Instrument{
  constructor(){
    super('percusión')
  }
  play(){
    console.log(' 🥁 Boom boom Boom ...')
  }
}



class Artist{
  constructor(){}
  playInstrument(instrument: Instrument){
    instrument.play()
    console.log(instrument.type)
  }
}

const guitar1 = new Guitar()
// console.log(guitar1.type)
// guitar1.play()
const flute1 = new Flute()
// console.log(flute1.type)
// flute1.play()
const drums1 = new Drums()

const artist1 = new Artist()

console.log('Artistas tocando:')
artist1.playInstrument(guitar1)
artist1.playInstrument(flute1)
artist1.playInstrument(drums1)

