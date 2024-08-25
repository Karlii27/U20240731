
const fecha = new Date('February 20, 2012 03:12:00');
const opcionesFechaHora = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
};
const fechaHoraFormateada = fecha.toLocaleString('en-US', opcionesFechaHora);
console.log(` ${fechaHoraFormateada}`);
