// Esta es otra manera de manejar las promesas en js

async function miFuncionConPromesa() {
    return "Saludos con promesa y Async"
}

//miFuncionConPromesa().then(valor => console.log(valor))

// await solo nos funciona con async
//async / await 
async function miFuncionConPromesaYAwait(){
    let miPromesa = new Promise ( resolver => {
        resolver("mi funcion con await")
    })
    console.log(await miPromesa)
}

//miFuncionConPromesaYAwait() // llamamos la funcion para que nos pueda imprimir el valor

async function funcionGeneral() {
    let promesafinal = new Promise ((resolver) => {
        setTimeout (() => resolver ("Hola funcion con promesas async y await y setimout"), 3000)
    })
    console.log(await promesafinal)
}

funcionGeneral()
