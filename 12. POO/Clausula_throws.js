'use strict'

let x = 1
try{
    if(isNaN(x)) throw 'Esto no es un numero'    
    if(x === "")throw 'Este no es valor valido'
    if(x > 0) throw 'Es un numero positivo'
}
catch(error){
    console.log(error)
    // console.log(error.name)
    //console.log(error.message)

}
finally{
    console.log("Termina el tema de revision de errores ") // siempre se va a ejecutar
}
console.log("El programa continua...") 


