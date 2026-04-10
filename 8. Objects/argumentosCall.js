let persona1 = {
    nombre : "Esteban",
    apellido: "Garzon",
    nombreCompleto : function(titulo, tel){
        return titulo + this.nombre + " " + this.apellido + tel
    }

}

let persona2 = {
    nombre : "Sebastian",
    apellido : "Bernal"
}


// console.log(persona1.nombreCompleto())

console.log(persona1.nombreCompleto.call(persona2, "Ing ", " 313252126" ))


