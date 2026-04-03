let persona = { 
    nombre : "Esteban",
    apellido : "Garzon",
    correo : "yersmangarzon@gmail.com",
    nombreCompleto : function(){
        return this.nombre + " " + this.apellido
    }
}

// concatenar cada valor de cada propiedad 
//console.log (persona.nombre + " " + persona.apellido) // Esteban Garzon

// for in
for( nombrePropiedad in persona){
    console.log(persona[nombrePropiedad])
    
}

let personaArray = Object.values(persona)
console.log(personaArray)


let personaString = JSON.stringify(persona)
console.log(personaString)