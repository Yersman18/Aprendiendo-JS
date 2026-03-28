// cadenas y funciones en js
// cadenas inmutables en JS (no se puede modificar)
// Los valores de las cadenas no se pueden cambiar porque son inmutables a menos que se vuelva a llamar la variable y la cambiamos a fuera de la funcion
function cambiarValor(parametro){
    parametro = 'Hola'
}

let argumento = 'Adios'
console.log(`funcion antes: ${argumento}`)
cambiarValor(argumento)
console.log(`Funcion despues ${argumento}`)


