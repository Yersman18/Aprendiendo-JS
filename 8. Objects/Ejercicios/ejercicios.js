/* 1. Crear y acceder auto con:
marca
modelo
año
Luego:
imprime la marca
imprime todas las propiedades con un ciclo



let auto = {
    marca: "Toyota",
    modelo : "sedanes",
    año: 2023
}

console.log(auto["marca"])
for (let i in auto){
    console.log(`${i} : ${auto[i]}`)
}

-----------------------------------------------------------
Dado:
let usuario = {
  nombre: "Juan",
  edad: 20
}
Haz lo siguiente:

cambia la edad
agrega una propiedad email
elimina nombre



let usuario = { 
    nombre : "Juan",
    edad : 20
}

usuario.edad = 23  // cambiamos el valor de la propiedad de edad
usuario.correo = "yersmangarzon@gmail.com" // agregamos una nueva propiedad =

delete usuario.nombre // eliminamos la la propiedad de edad

console.log(usuario) // solo pues un consoloe log para el resultado final (ya comprobe los otros y bien)

------------------------------------------------------------------
3. Método dentro de objeto

Crea un objeto persona con:

nombre
apellido
un método que retorne el nombre completo

let persona = {
    nombre : "Esteban",
    apellido : "Garzon",
    get nombreCompleto() {
        return this.nombre + ' ' + this.apellido
    }
}

console.log(persona.nombreCompleto)

----------------------NIVEL 2---------------------------------------

4. 4. Uso de this

Crea un objeto producto con:

nombre
precio
un método que diga: "El producto X cuesta Y"



let producto = { 
    _nombre : "Yogurt",
    precio : 23000,
    resultado : function(){
        return `El producto ${this._nombre} cuesta ${this.precio} pesos colombianos`
    }
}

console.log(producto.resultado())
------------------------------------------------------------------------------------------
7.
// nose si era asi esta ejercicio

let persona = {
    nombre : "Ana",
    edad : 25,
    ciudad : "Bogota"
} 

for (let i in persona){
    console.log(persona[i])
}

----------------------- LOGICA REAL ----------------------------------------

let producto = {
    nombre : "Mango",
    precio : 2000,
    cantidad : 3,
    get valorProducto() {
        let valor = this.cantidad * this.precio
        return `las ${this.cantidad} unidades del ${this.nombre} es un total de ${valor} pesos`
    }
} 

console.log (producto.valorProducto)

-----------------------------------------------------------------------------
ejericio 11
*/

// let usuario = {
//     nombre : "Esteban",
//     edad : 17,
//     get mayorDeEdad(){
//         if( this.edad >= 18){
//             return `${this.nombre} es mayor de edad`
//         }
//         else
//             return `${this.nombre} es menor de edad`
//     }
// }


// console.log (usuario.mayorDeEdad)


let numeros = [1, 2, 3, 4]
let multiplicacion = []


for (let i = 0; i < numeros.length; i ++){
    multiplicacion[i] = numeros[i] * 2 
}


console.log(multiplicacion)



