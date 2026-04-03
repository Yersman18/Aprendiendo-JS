let persona = {
    nombre: 'Esteban',
    apellido: 'Garzon',
    email: 'yersmangarzon@gmail.com'
}

//console.log(persona.nombre) // Esteban

// for in 
for( nombrePropiedad in persona){
    console.log(nombrePropiedad) // nombre apellido email
    console.log(persona.email) // yersmangarzon@gmail.com
    break
}

