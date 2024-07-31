let readline = require('readline')

let rl=readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una palabra: ', (palabra) => {
    
    const palabraLimpia = palabra.replace(/\s+/g, '')// Eliminar espacios
    
    
    const palabraInvertida = palabraLimpia.split('').reverse().join('') // Invertir la palabra

    if (palabraLimpia === palabraInvertida) {
        console.log('La palabra ingresada es un palíndromo.');
    } else {
        console.log('La palabra ingresada no es un palíndromo.')
    }
    
    rl.close()
});