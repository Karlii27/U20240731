const fecha1 = new Date('2024-08-24')
const fecha2 = new Date('2024-08-27')

const diferenciaMilisegundos = Math.abs(fecha2 - fecha1)

const diferenciaDias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

console.log(`La diferencia entre las dos fechas es de ${diferenciaDias} días.`);
