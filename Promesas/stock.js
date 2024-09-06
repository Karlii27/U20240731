let stock=100

function cantidad(stock) {
    return new Promise((resolve, reject)=>{
        if (stock<=100) {
            resolve("Stock suficiente para la cantidad de: "+stock) 
        }else{
            reject("Stock insuficiente")
        }
    })
}

cantidad(105)
.then(res=>{
    console.log('Mensaje: '+res)
})
.catch(error=>{
    console.log('Mensaje: '+error)
})