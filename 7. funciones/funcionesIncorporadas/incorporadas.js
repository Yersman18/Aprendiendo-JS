// funciones incorporadas de JS 

// obtener el largo de una cadena
let cadena1 = "Hola"
console.log(cadena1.length) // la primera funcion incorporada de js es lenght es para contar 


// no podemos modificar una cadena en JS 
// ya que nos inmutables
cadena1[0] = "x"
console.log(cadena1)

//si podemos asignar una nueva cadena
cadena1 = "Adios"
console.log(cadena1)

// recorrer cada caracter
for (let i = 0; i < cadena1.length; i++){
    console.log(`El indicice ${i} es ${cadena1[i]}`)
}



