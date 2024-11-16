const fs = require('fs');
const fileName = 'estudiantes.json';

function contarEstudiantes(callback) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo JSON', err);
            return;
        }

        const estudiantes = JSON.parse(data);
        console.log(`Número total de estudiantes: ${estudiantes.length}`);
        callback(); 
    });
}

module.exports = contarEstudiantes;
