
/*
let ejecutar = () => {
    console.log("Hola Yersman")
}

let saludar = (callback) => {
    callback()
}

saludar(ejecutar)
_---------------------------------------------

let mostrarmensaje = () => {
    console.log("Bienvenido al sistema")
}

let procesarUsuario = (nombre, callback) => {
    console.log(`Cargando usuario: ${nombre}...`)
    callback()
}

procesarUsuario("Yersman", mostrarmensaje)

-----------------------------------------------------------------------

let mensaje = () => {
    setTimeout(() => {console.log("Sistema inciado correctamente")}, 3000)
}

let procesadoinico = (callback) => {
    console.log ("Iniciando sistema...")
    callback()
}

procesadoinico(mensaje)

--------------------------------------------------------------------------

let numero = 0

let contador = () => {
    console.log(numero)
    numero++
    
    
    if(numero > 5){
        clearInterval(intervalo)
    }
}

let intervalo = setInterval(contador, 1000)


let saludo = () => {
    console.log("Hola Yersman")
}

let ejecutar = (callback) => {
    callback()
}

ejecutar(saludo)



let mostrarEdad = (edad ) => {
    console.log(`Edad: ${edad}`)
}

let procesarPersona = (nombre, edad, callback) => {
    console.log (`Procesando ${nombre}...`)
    callback(edad)
}

procesarPersona("Yersman", 23, mostrarEdad)

*/
let mostrandoNombre = (nombre) => {
    console.log(`Bienvenido: ${nombre}`)
}


let verificarUsuario = (nombre, callback) => {
    console.log("verificando usuario... ")
    setTimeout (() => {callback(nombre) }, 3000)
}

verificarUsuario("Yersman", mostrandoNombre)


   







