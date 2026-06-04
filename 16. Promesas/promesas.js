

let miPromesa =  new Promise((resolver, rechazar) => { // promise es una objeto  
    let expresion =  true // dependiendo del valor de la variable nos imprimira el callback (resolver o rechazar)
    if(expresion)
        resolver("Resolvio correcto")
    
    else 
        rechazar("Se produjo un error")

})

 miPromesa.then( valor => console.log(valor),     error => console.log(error) )
// then : cumplio la promesa 
//catch : no cumplio la promesas
miPromesa
.then (valor => console.log(valor))
.catch (error => console.log(error))

