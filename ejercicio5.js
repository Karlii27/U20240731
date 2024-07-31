let readline = require('readline')

let rl=readline.createInterface(
    process.stdin,
    process.stdout
)
rl.question('Ingrese una cadena: ', (cadena) => {
    
    rl.question('Ingrese la posición inicial para extraer la subcadena: ', (inicio) => {
     
        rl.question('Ingrese la posición final para extraer la subcadena: ', (fin) => {
           
            const posicionInicial = parseInt(inicio, 10)
            const posicionFinal = parseInt(fin, 10)

          
            const subcadena = cadena.substring(posicionInicial, posicionFinal)

          
            console.log(`La subcadena extraída es: ${subcadena}`)

            
            rl.close()
        })
    })
})
