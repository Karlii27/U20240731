const fechaActual=new Date()
const opciones={ weekday: 'short'}

const diaSemana=fechaActual.toLocaleDateString('en-us',opciones)
console.log(diaSemana)