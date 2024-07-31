let readline = require('readline')

let rl=readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una frase: ', (frase) => {
    const palabras = frase.split(' ')
    const fraseCapitalizada = palabras.map(palabra => {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    }).join(' ')

    console.log(`La frase con cada palabra capitalizada es: ${fraseCapitalizada}`)

 
    rl.close()
})