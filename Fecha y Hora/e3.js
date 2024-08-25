const mes= new Date()
const opciones=['Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre', 'Octubre','Noviembre','Diciembre']
const indiceMes = mes.getMonth()
const mesActual = opciones[indiceMes]
console.log(`El mes actual es: ${mesActual}`)