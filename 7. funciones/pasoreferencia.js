// paso por referencia JS
// objetos (array) se pasan por referencia

function cambiarValor(parametro){
    parametro[0] = 20
}

let numero = [23]
console.log(`numero antes de la funcion ${numero[0]}`)//numero antes de la funcion 23
cambiarValor(numero)
console.log(`numero despues de la funcion ${numero[0]}`)//numero antes de la funcion 20