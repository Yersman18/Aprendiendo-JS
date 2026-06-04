

let mifuncion = function(){
    console.log("Saludos desde una funcion")
}

let mifuncionflecha = () => {
    console.log("Saludos desde una funcin flecha")
}

mifuncionflecha()

// nos funciona para poder imprimir un objeto
const funcionBbjeto = () => ({nombre : "Esteban"})
console.log(funcionBbjeto())


// funcion con parametros asignados
constfuncionConParametros = (mensaje) => {
    console.log(mensaje)
} 
constfuncionConParametros("Hola funcion con parametros")


// funcion con varios parametros
const funcionConVariosParametros = (op1, op2) => {
    let resultado = op1 + op2
    return `Resultado:  ${resultado}`
}

console.log(funcionConVariosParametros(1, 5))





