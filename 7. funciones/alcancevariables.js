// alcance de variables en js
let variableGlobal = 20

// modificar el valor de la variable
variableGlobal = 10

function miFuncion(variableLocal) {
    console.log(variableLocal)
    variableGlobal = 30
    // No podemos redifinir la variable
    // let variableLocal = 23 // yntaxError: Identifier 'variableLocal' has already been declared
}

console.log(`antes ${variableGlobal}`)
miFuncion(variableGlobal)
console.log(`Despues ${variableGlobal}`)
  