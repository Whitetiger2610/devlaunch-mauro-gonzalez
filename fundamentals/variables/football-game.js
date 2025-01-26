const eventName = "Eliminatorias Sudamericanas"

// const matchDate = '22/11/23'
const day = 22
const month = 11
const year = 2023

const date = `${day}/${month}/${year}`

// const matchTime = '20:30'
const hour = 20
const minutes = 30

const time = `${hour}:${minutes}`

const localTeam = 'Argentina'
const visitorTeam = 'Brazil'

const scoreLocalTeam =  1
const scoreVisitorTeam = 0

const scoreMatch = `${scoreLocalTeam} - ${scoreVisitorTeam}`

// console.log(eventName)
// console.log(date)
// console.log(time)
// console.log(localTeam,"vs",visitorTeam)

// console.log(scoreMatch)

console.log(`
    Torneo: ${eventName}\n
    Fecha: ${date}
    Hora: ${time}\n
    Equipos: ${localTeam} vs ${visitorTeam}
    Marcador: ${scoreMatch}
    `)