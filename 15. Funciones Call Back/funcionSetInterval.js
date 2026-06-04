let reloj = () => {
    let fecha = new Date()
    console.log(`${fecha.getHours()} ${fecha.getMinutes()} ${fecha.getSeconds()}`) 
}

setInterval(reloj, 1000) // llama la funcion cada segundo y nos imprimie el tiempo real