const fs = require('fs');
const fileName = 'estudiantes.json';

function leerDatos(callback) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo JSON', err);
            return;
        }
        try {
            const objectJSON = JSON.parse(data);
            console.log('Contenido del archivo JSON:', objectJSON);
        } catch (error) {
            console.log('Error al parsear el JSON:', error);
        }
        callback(); 
    });
}

module.exports = leerDatos;
