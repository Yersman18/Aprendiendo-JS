/* 
let numeros = [ 5, 10, 15]
let suma = 0
for (let i = 0; i < numeros.length; i++){
    suma += numeros[i]
}

let numeros = [1, 2, 3, 4]
let multiplicacion = []


for (let i = 0; i < numeros.length; i ++){
    multiplicacion = numeros[i] * 2
    console.log(multiplicacion)
}


let usuarios = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 20 },
  { nombre: "Carlos", edad: 18 }
]



for (let i in usuarios){
    let usuario = usuarios[i]
    if (usuario.edad >= 18) {
        console.log(usuario)
    }
}

//let persona = usuarios[0]

//console.log(persona.nombre , persona.edad)
-------------------------------------------CLASES--------------------------------------
*/
/*
Crea una clase persona que tenga: 
nombre 
edad
y crea un objeto e imprimelo

class persona{
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
}

let persona1 = new persona("Esteban", 19)
console.log(persona1)
======================================================
2. 
*/

class saludoPersona{
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }        
    saludo(){
        console.log(this.nombre) 
    }
}
let persona = new saludoPersona("Yersman", "Cruz")
persona.saludo()

3.
/*
class usoGet{
    constructor(nombre, edad){
        this._nombre = nombre
        this.edad = edad
    }
    get nombre(){
        if (this._nombre.length < 3){
            return "El nombre contiene menos de 3 caracteres, nombre invalido"        
        }
        else
            return this._nombre.toUpperCase()
    }
}

let persona1 = new usoGet("Es", 19)
console.log(persona1.nombre)

*/







