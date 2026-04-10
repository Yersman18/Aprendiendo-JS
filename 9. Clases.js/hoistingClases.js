// Hoisting


// Esto nos va arrogar error porque no podemos inicializar la nueva clase antes de crearla 

// let persona2 = new persona ('Carlos', 'Miranda')
// console.log(persona2)


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