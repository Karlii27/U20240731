function envioCorreo(direccion) {
    return new Promise((resolve, reject)=>{
        console.log(`Enviando tu correo a: ${direccion}, espera unos segundos`)
        setTimeout(() => {
            if (direccion) {
                resolve(`Correo enviado a: ${direccion}`)
            }else{
                reject("Dirección de correo no proporcionada")
            }
        }, 2000);
    })
}
envioCorreo("Dani07@gmail.com")
.then(res=>{
    console.log('Mensaje: '+res)
})
.catch(error=>{
    console.log('Mensaje: '+error)
})