// probando metodos de los objetos
let persona = {
    nombre_ : "Esteban",
    apellido : "Garzon",
    email : "yersmangarzon@gmail.com",
    get nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    },
    get nombre(){
        return this.nombre_ 
    },

    set nombre(nombre){
        this.nombre_ = nombre.toUpperCase()
    }
}

persona.nombre = "Esteban"
console.log(persona)