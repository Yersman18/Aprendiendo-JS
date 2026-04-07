function Persona(nombre, apellido, email){
    this.nombre = nombre
    this.apellido  = apellido
    this.email = email
    this.NombreCompleto = function(){
        return `${this.nombre} ${this.apellido}` 
    }

}


let padre = new Persona("Esteban", "Garzon", "yersmangarzon@gmail.com")
console.log(padre.NombreCompleto())

let madre = new Persona("Paula", "Garcia", "paulagarcia@gmail.com")
console.log(madre.NombreCompleto())


//padre.nombre = "Yersman" // el cambio que se realizo
