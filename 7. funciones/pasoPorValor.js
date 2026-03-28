// Pasando iunformacion de tipo prmitivo (number, string, bool)
// No nos cambia nada ya que los parametros creados dentro de la funcion no afectan al codigo que se encuenta afuera de la funcion
function cambiarValor(parametro){
    parametro = 23
}

let argumento = 0 // Por tanto el valor va a seguir siendo 0 solo es una "copia" del "valor" (por eso se le llama asi (Paso por valor )) 
cambiarValor(argumento)
console.log(argumento)


