// metodos get y set dentro de las clases 

class persona{
    constructor(nombre, apellido){
        this._nombre = nombre
        this.apellido = apellido
    }
    get nombre(){
        return this._nombre 
    }
    set nombre(nombre){
        this._nombre = nombre.toUpperCase()
    }

}

let persona1 = new persona ("Esteban", "Garzon")
persona1.nombre = "Yersman"
console.log(persona1.nombre)