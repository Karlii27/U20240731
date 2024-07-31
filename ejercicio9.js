let readline = require('readline')

let rl=readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una palabra: ', (palabra) => {
    const vocales = 'aeiouAEIOU'
    let contador = 0;

    // cuenta las vocales en la palabra
    for (let char of palabra) {
        if (vocales.includes(char)) {
            contador++
        }
    }

    console.log(`El número de vocales en la palabra es: ${contador}`)

    rl.close();
});