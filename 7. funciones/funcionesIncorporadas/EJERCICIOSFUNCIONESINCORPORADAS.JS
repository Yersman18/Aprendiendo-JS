// crea una funcion que:
/*
- reciba dos valores tipo string(numeros en texto)
- los convierta a numero
- retorne la suma


let a = 10 
let b = 20

function conversion(a, b){
    return parseInt(a) + parseInt(b)
}

let resultado = conversion(a, b)
console.log(resultado)

2. crea una funcion que reciba un numero:
- lo convierta a string
- retorne ese string concatenado consigo mismo


let numero = 21
function conversionString(a){
    let texto = a.toString()
    let c = texto + texto
    return c
}

let resultado = conversionString(numero)
console.log(resultado)

///------------------------- NIVEL 2 -------------------------------

Crea una funcion que reciba una funcion que 
- reciba un string 
- retorne solos los primeros 3 caracteress (substring)



let palabra = "No me voy a rendir"


function imprimirCaracteres(text){
    return palabra.substring(0, 3) 
}

let resultado = imprimirCaracteres(palabra)

console.log((resultado))

Crea una funcion que 
- reciba un string 
- retorne cuantos caracteres tiene (sin usar console.log dentro)



let oracion = "No me voy a rendir"

function ContarCaracteres(a){
    return a.length
}

let c = ContarCaracteres(oracion)
console.log(c)

*/

// ----------------------------- NIVEL 3 --------------------

let oracion = "No me voy a rendir"

function ImprimirXCaracter(a){
    for(let i = 0; i < String(a).length; i++)
        console.log (a[i])
}


ImprimirXCaracter(oracion)