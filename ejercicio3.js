let readline = require('readline')

let rl=readline.createInterface(
    process.stdin,
    process.stdout
)
rl.question('Escriba un mensaje', (mensaje)=>{
    const msjMayusculas=mensaje.toUpperCase()
    console.log(`La cadena de caracteres en mayusculas es: ${msjMayusculas}`)
    process.exit()
})