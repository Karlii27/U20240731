function codigoDES(codigo) {
    return new Promise((resolve, reject)=>{
        if (codigo==="DESCUENTO2024") {
            resolve("Código de descuento válido") 
        }else{
            reject("Código de descuento inválido")
        }
    })
}

codigoDES("DESCUENTO2022")
.then(res=>{
    console.log('Mensaje: '+res)
})
.catch(error=>{
    console.log('Mensaje: '+error)
})