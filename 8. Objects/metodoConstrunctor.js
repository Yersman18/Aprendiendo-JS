function Persona(nombre, apellido, email){
    this.nombre = nombre
    this.apellido  = apellido
    this.email = email
}


let padre = new Persona("Esteban", "Garzon", "yersmangarzon@gmail.com")

console.log(padre)

let madre = new Persona("Paula", "Garcia", "paulagarcia@gmail.com")

console.log(madre)

padre.nombre = "Yersman" // el cambio que se realizo

console.log(padre)