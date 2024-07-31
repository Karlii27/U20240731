let readline = require('readline')

let rl=readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese la Frase: ', (fraseOriginal)=>{
    rl.question('Ingrese la palabra a remplazar: ', (reemplazo)=>{
        rl.question('Ingrese la nueva palabra: ', (nuevaPalabra)=>{
            const fraseModificada=fraseOriginal.replace(new RegExp(reemplazo, 'g'), nuevaPalabra)
            console.log(`Su texto modificado: ${fraseModificada}`)
            process.exit()
        })
    })
})