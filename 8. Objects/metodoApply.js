let persona1 = {
    nombre : "Esteban",
    apellido: "Garzon",
    nombreCompleto : function(titulo, tel){
        return titulo + this.nombre + " " + this.apellido  + tel
    }

}

let persona2 = {
    nombre : "Sebastian",
    apellido : "Bernal"
}

// Uso del metodo Apply para usar 
// el motodo persona1.nombreCompleto con los datos de persona2
console.log(persona1.nombreCompleto("Ing ",  2342425))


let informacion  = ["Ingeniero " , 3453453]
console.log(persona1.nombreCompleto.apply(persona2, informacion))



