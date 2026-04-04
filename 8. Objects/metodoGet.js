let persona = { 
    nombre : "Esteban",
    apellido : "Garzon",
    correo : "yersmangarzon@gmail.com",
    get nombreCompleto(){ // quitamos la funcion que teniamos para poder llamar las proiedades del objeto y ahora lo hacemos con get
        return this.nombre + " " + this.apellido
    }
}

console.log(persona.nombreCompleto) // ya no tenemos que poner los () porque en la propiedad ya nos esta diciendo que vamos a OBTENER un valor


