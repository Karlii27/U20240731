const readline = require('readline');

const crearDatos = require('./create');
const leerDatos = require('./read');
const addNuevoEstudiante = require('./add');
const modificarEstudiante = require('./update');
const eliminarEstudiante = require('./delete');
const contarEstudiantes = require('./count');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log(`
    1. Crear archivo JSON con estudiantes
    2. Leer archivo JSON de estudiantes
    3. Agregar nuevo estudiante
    4. Actualizar información de estudiantes
    5. Eliminar un estudiante
    6. Contar estudiantes
    7. Salir
    `);

    rl.question('Selecciona una opción: ', (opcion) => {
        switch (opcion) {
            case '1':
                crearDatos(() => {
                    mostrarMenu();
                });
                break;
            case '2':
                leerDatos(() => {
                    mostrarMenu();
                });
                break;
            case '3':
                rl.question('Ingresa el nombre del estudiante: ', (nombre) => {
                    rl.question('Ingresa el apellido del estudiante: ', (apellido) => {
                        rl.question('Ingresa la edad del estudiante: ', (edad) => {
                            rl.question('Ingresa la facultad del estudiante: ', (facultad) => {
                                const nuevoEstudiante = {
                                    nombre: nombre.trim(),
                                    apellido: apellido.trim(),
                                    edad: parseInt(edad.trim()),
                                    facultad: facultad.trim()
                                };

                                addNuevoEstudiante(nuevoEstudiante, () => {
                                    mostrarMenu();
                                });
                            });
                        });
                    });
                });
                break;
            case '4':
                rl.question('Ingresa el nombre del estudiante a modificar: ', (nombre) => {
                    rl.question('Ingresa los nuevos datos (edad, facultad): ', (input) => {
                        const [edad, facultad] = input.split(',');
                        modificarEstudiante(nombre.trim(), {
                            edad: parseInt(edad.trim()),
                            facultad: facultad.trim(),
                        }, () => {
                            mostrarMenu();
                        });
                    });
                });
                break;
            case '5':
                rl.question('Ingresa el nombre del estudiante a eliminar: ', (nombre) => {
                    eliminarEstudiante(nombre.trim(), () => {
                        mostrarMenu();
                    });
                });
                break;
            case '6':
                contarEstudiantes(() => {
                    mostrarMenu();
                });
                break;
            case '7':
                console.log('Saliendo del programa...');
                rl.close();
                return;
            default:
                console.log('Opción no válida.');
                mostrarMenu();
                break;
        }
    });
}

mostrarMenu();
