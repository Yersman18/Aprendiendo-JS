function Persona(nombre, apellido, email){
    this.nombre = nombre
    this.apellido  = apellido
    this.email = email
    this.NombreCompleto = function(){
        return `${this.nombre} ${this.apellido}` 
    }

}

Persona.prototype.tel = 2342424

let padre = new Persona("Esteban", "Garzon", "yersmangarzon@gmail.com")
console.log(padre.NombreCompleto())
padre.tel = 33333333
console.log(padre.tel)

let madre = new Persona("Paula", "Garcia", "paulagarcia@gmail.com")
console.log(madre.NombreCompleto())
madre.tel = 4444444
console.log(madre.tel)


//padre.nombre = "Yersman" // el cambio que se realizo
