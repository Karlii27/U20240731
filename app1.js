let readline = require('readline')

let rl=readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Cuál es su nombre?',(nombre)=>{
    console.log(`Hola, ${nombre}!`)
    process.exit()
})