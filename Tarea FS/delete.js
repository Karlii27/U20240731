const fs = require('fs');
const fileName = 'estudiantes.json';

function eliminarEstudiante(nombreBuscado, callback) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo JSON', err);
            return;
        }

        const estudiantes = JSON.parse(data);

        const estudianteIndex = estudiantes.findIndex(estudiante => estudiante.nombre === nombreBuscado);

        if (estudianteIndex !== -1) {
            estudiantes.splice(estudianteIndex, 1);

            fs.writeFile(fileName, JSON.stringify(estudiantes, null, 2), (err) => {
                if (err) {
                    console.error('Error al escribir el archivo JSON', err);
                    return;
                }
                console.log(`Estudiante "${nombreBuscado}" eliminado con éxito.`);
                callback(); 
            });
        } else {
            console.log(`Estudiante con nombre "${nombreBuscado}" no encontrado.`);
            callback();  
        }
    });
}

module.exports = eliminarEstudiante;
