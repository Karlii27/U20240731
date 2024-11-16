const fs = require('fs');
const fileName = 'estudiantes.json';

function modificarEstudiante(nombreBuscado, nuevoEstudiante, callback) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo JSON', err);
            return;
        }
        const estudiantes = JSON.parse(data);

        const index = estudiantes.findIndex(item => item.nombre === nombreBuscado);

        if (index === -1) {
            console.log(`Estudiante con nombre "${nombreBuscado}" no encontrado.`);
            return;
        }

        estudiantes[index] = { ...estudiantes[index], ...nuevoEstudiante };

        fs.writeFile(fileName, JSON.stringify(estudiantes, null, 2), (err) => {
            if (err) {
                console.error('Error al escribir el archivo JSON', err);
                return;
            }
            console.log(`Estudiante "${nombreBuscado}" modificado con éxito.`);
            callback(); 
        });
    });
}

module.exports = modificarEstudiante;
