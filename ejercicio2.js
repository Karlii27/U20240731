let readline = require('readline')

let rl=readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese un mensaje',(mensaje)=>{
    const numCaracteres=mensaje.length
    console.log(`El número de caracteres que tiene su mensaje es de: ${numCaracteres}`)
    process.exit()
})
