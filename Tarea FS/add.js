const fs = require('fs');
const fileName = 'estudiantes.json';

function addNuevoEstudiante(nuevoEstudiante, callback) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo JSON', err);
            return;
        }

        const estudiantes = JSON.parse(data);

        if (!nuevoEstudiante || !nuevoEstudiante.nombre) {
            console.log('No se puede agregar un estudiante sin un nombre válido');
            return;
        }

        estudiantes.push(nuevoEstudiante);

        fs.writeFile(fileName, JSON.stringify(estudiantes, null, 2), (err) => {
            if (err) {
                console.error('Error al escribir el archivo JSON', err);
                return;
            }
            console.log('Nuevo estudiante agregado con éxito.');
            callback(); 
        });
    });
}

module.exports = addNuevoEstudiante;
