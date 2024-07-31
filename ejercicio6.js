let readline = require('readline')

let rl=readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una frase: ', (frase) => {
    const palabras = frase.trim().split(/\s+/)
    const numeroDePalabras = palabras.length

    console.log(`El número de palabras en la frase es: ${numeroDePalabras}`);

    rl.close()
});
