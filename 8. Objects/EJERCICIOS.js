// crea un objeto y muestra en consola uno de sus valores 

let persona = {
    nombre : "Esteban",
    apellido : "Garzon",
    correo: "yersmangarzon@gmail.com",
    nombreCompleto: function(){
        console.log(this.nombre + " " + this.apellido)
    },
    altura : 1.40
}

// 1.
//console.log(persona.apellido) 

// 2. Accede a una propiedad usando corchetes ([]) en lugar de punto. (Este casi no lo entendi bien)

// for(imprimir in persona){
//     console.log(persona[imprimir])
//     break
// }


// 3.
for(imprimir in persona){
    //console.log(persona[imprimir])
}

// 4. 
persona.edad = 12

persona.edad = 20

delete persona.edad

// 5. // (al inicio agregue la funcion)
persona.nombreCompleto()


// 6.
let nuevoObjeto = new Object()

nuevoObjeto.nombreNuevo = "Yersman"

//console.log(nuevoObjeto)


//7. PRACICAR MAS
let array = Object.values(persona)
//console.log(array)


//.8
console.log(JSON.stringify(persona))


// 9.(no entendi muy bien este ejercicio)

numero = persona.altura

numero.length

// reforzando tema (con el mismo objeto que tengo arriba)
console.log(persona["correo"])
