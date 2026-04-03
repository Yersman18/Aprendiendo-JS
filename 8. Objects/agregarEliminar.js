let persona = { 
    nombre : "Esteban",
    apellido : "Garzon",
    correo : "yersmangarzon@gmail.com",
    nombreCompleto : function(){
        return this.nombre + " " + this.apellido
    }
}

console.log(persona.nombreCompleto()) // Esteban Garzon

// cambiaando el valor de la propiedad del objeto
persona.tel = 2344234
persona.tel = 5675756

delete persona.tel // elimina la propiedad y lo contenga dentro de la propiedad

//console.log(persona) // verificamos que sedddddd haya eliminado


//console.log(persona.apellido)