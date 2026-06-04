saludo1()
saludo2()

function saludo1(){
    console.log("Saludo 1")
}

function saludo2() {
    console.log("Saludo 2")
}

// funciones Call Back
function imprimir(mensaje){
    console.log(mensaje)
} 

function operacion(op1, op2, funcionCallbak){ // le pasamos como parametro en funcionCallback la funcion
    let sumar = op1 + op2
    funcionCallbak(`Resultado : ${sumar}` ) // en la funcion Call Back nos arrogr el resultado
}

operacion(2, 5, imprimir)