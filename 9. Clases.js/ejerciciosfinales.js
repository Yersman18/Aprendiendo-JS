/* crea un objeto literal
nombre
precio
metodo que diga 
"Tengo x años"
*/

let persona = {
    nombre : "Esteban",
    edad : 19,
    frase : function(){
        return `Tengo ${this.edad} años`
    }
}

console.log(persona.frase())


/*
Crea una clase Producto
nombre 
precio 
metood que digga
"El producto  cuesta x"
*/

class Producto{
    constructor(nombre, precio){
        this._nombre = nombre
        this._precio = precio
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    get precio(){
        return this._precio
    }
    set precio(precio){
        this._precio = precio
    }
    info(){
        return `El ${this.nombre} cuesta ${this.precio} `
    }
}

let pro1 = new Producto("Queso", 23000)
console.log(pro1.info())