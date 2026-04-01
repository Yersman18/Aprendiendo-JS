// crear una funcion que reciba un string lo convierta a numero y retorne ese nuemero multiplicado por dos

let numero = "23"

function convertir(num){
    let convertidor = parseInt(num)
    return convertidor * 2
}

let c = convertir(numero)

//console.log(c)


// crea una funcion que retorne los ultimos 3 caracteres 

let oracion = "Amigos mios"

function contar(texto){
    return texto.substring(texto.length - 3, texto.length)    
}

let resultado = contar(oracion)
console.log(resultado)


//  Crea una funcion que reciba un string e imprima cada caracter uno por uno

let palabra = "No me voy a rendir"

function imprimirCaracteres(texto){
    for (let i = 0; i < texto.length; i++ ){
        console.log(texto[i])
    }
}

//imprimirCaracteres(palabra)

