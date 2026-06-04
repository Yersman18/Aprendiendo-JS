/*
let ValidandoUsuario = new Promise((resolve, reject) => {
    let usuario = "admin"
    if(usuario === "admin")
        resolve (`Bienvenido ${usuario}`)
    else
        reject ("Rechazado")
})

ValidandoUsuario
.then(valor => console.log(valor))
.catch(error => console.log(error))

----------------------------------------------------------------

let CargandoDatos = new Promise((resolve) => {
    setTimeout (() => { resolve("Datos cargados")}, 3000)
})

CargandoDatos
.then((valor) => console.log(valor))

----------------------------------------------------------------


let operacion = new Promise ((resolve) => { 
    resolve(50) 
})

operacion
.then((multiplicacion) => {return (multiplicacion * 2)})


.then((suma) => {return( suma + 10)})


.then((final) => {console.log(final)})


--------------------------------------------------------------
--------------------------------------------------------------

let miPromesa = new Promise((resolve, reject) => {
    let conexion = false
    if (conexion)
        resolve("Resuelto")
    else
        reject("Rechazada la conexion")
})  

miPromesa
.catch((error) => console.log(error))

------------------------------------------------------------------

async function saludo(){
    return "Hola Yersman"
}

saludo().then((valor)=> console.log(valor))

*/

async function usuario(){
    let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {resolve("Usuario encontrado")}, 2000)
    })
    console.log(await promesa)

}

usuario()

