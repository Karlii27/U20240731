const fs = require('fs');
const fileName = 'estudiantes.json';

function crearDatos(callback) {
    const estudiantesBd = [
        {
          nombre: 'Karla',
          apellido: 'Morales', 
          edad: 19,
          facultad: 'Ingeniería y Arquitectura'
        }
      ];

    fs.writeFile(fileName, JSON.stringify(estudiantesBd, null, 2), (err) => {
        if (err) {
            console.error('Error al crear el archivo JSON', err);
            return;
        }
        console.log('El archivo fue creado con éxito');
        callback();
    });
}

module.exports = crearDatos;
