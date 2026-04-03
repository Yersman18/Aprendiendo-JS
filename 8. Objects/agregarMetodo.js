// objeto 

let persona = {
    nombre : "Esteban",
    apellido : "Garzon",
    edad : 19,
    nombreCompleto: function(){ // aqui definimos una propiedad donde almacena una funcion
        return this.nombre + " " + this.apellido // despues de crear una funcion retornamos con una propiedad llamada (this(Llama internamente el nombre del objeto)) 
 
    }
}
console.log(persona.nombreCompleto()) // llamamos el objeto donde esta alamacenando la propiedad donde tiene la funcion

