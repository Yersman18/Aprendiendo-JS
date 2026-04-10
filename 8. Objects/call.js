let persona1 = {
    nombre : "Esteban",
    apellido: "Garzon",
    nombreCompleto : function(){
        return `${this.nombre} ${this.apellido}`
    }

}

let persona2 = {
    nombre : "Sebastian",
    apellido : "Bernal"
}


// console.log(persona1.nombreCompleto())

console.log(persona1.nombreCompleto.call(persona2))


