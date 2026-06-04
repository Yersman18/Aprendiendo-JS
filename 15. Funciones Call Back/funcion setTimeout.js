
setTimeout (() => console.log("hola desde mi funcion de call back directamente"), 4000)

mifuncionCallBackc = () => {
    console.log("Hola desde mi funcion Call Back")
}

setTimeout (mifuncionCallBackc, 1000)


