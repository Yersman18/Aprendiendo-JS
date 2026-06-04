// creamos la clase de dispositivos de entreada  
class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada
        this._marca = marca
    }
    get tipoEntrada(){
        return this._tipoEntrada
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada
    }
    get marca(){
        return this._marca
    }
    set marca(marca){
        this._marca = marca
    }
}

let dispositivo1 = new DispositivoEntrada("USB", "DELL") //DispositivoEntrada { _tipoEntrada: 'USB', _marca: 'DELL' }
//console.log(dispositivo1)

class Raton extends DispositivoEntrada{

    static contadorRaton = 0

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idRaton = ++Raton.contadorRaton
    }
    get idRaton(){
        return this._idRaton
    }
    toString(){
        return `Raton: [idRaton: ${this.idRaton} tipoEntrada: ${this.tipoEntrada} marca: ${this.marca}] `
    }
}

let raton1 = new Raton("USB", "HP") // DispositivoEntrada { _tipoEntrada: 'USB', _marca: 'DELL' }
let raton2 = new Raton("USB", "DELL")
let raton3 = new Raton("USB", "LENOVO")
//console.log(raton1.toString())

class Teclado extends DispositivoEntrada{

    static contadorTeclados = 0

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca) 
        this._idTeclado = ++Teclado.contadorTeclados
    }
    get idTeclado(){
        return this._idTeclado 
    }
    toString(){
        return `Teclado: [ idTeclado: ${this.idTeclado} tipoEntrada: ${this.marca} marca: ${this.tipoEntrada}]`
    }
}

let teclado1 = new Teclado("HP" , "BLUETOOTH") // Teclado: [ idTeclado: 1 tipoEntrada: BLUETOOTH marca: HP]
let teclado2 = new Teclado("DELL" , "BLUETOOTH")
let teclado3 = new Teclado("DELL" , "BLUETOOTH")
// console.log( teclado1.toString())

// crear la clase la instanca de monitor
class Monitor {

    static contadorMonitor = 0

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitor
        this._marca = marca
        this._tamaño = tamaño
    }

    get idMonitor(){
        return this._idMonitor
    }
    get marca(){
        return this._marca
    }
    set marca(marca){
        this._marca = marca
    }
    get tamaño(){
        return this._tamaño
    }
    set tamaño(tamaño){
        this._tamaño = tamaño
    }
    toString(){
        return `Monitor [ idMonitor: ${this.idMonitor} Marca: ${this.marca} tamaño: ${this.tamaño}]`
    }
}

let monitor1 = new Monitor("HP", " 23") //Monitor [ idMonitor: 1 Marca: HP tamaño:  23]
let monitor2 = new Monitor("DELL", "32")
let monitor3 = new Monitor("LENOVO", "32")

// console.log(monitor1.toString())


class Computadora {

    static contadorComputadoras = 0

    constructor(nombre){
        this._idComputadora = ++Computadora.contadorComputadoras
        this._nombre = nombre
        this._monitores = []
        this._teclados = []
        this._mouses = []
    }
    get idComputadora(){
        return this._idComputadora
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre 
    }

    agregarMonitor(monitor){
        this._monitores.push(monitor)
    }
    
    mostrarMonitores(){
        let monitores = ""
        for(let monitor of this._monitores){
            monitores += monitor.toString() 
        }
        return monitores
    }

    agregarTeclado(teclado){
        this._teclados.push(teclado)
    }

    mostrarTeclado(){
        let teclados = ""
        for(let teclado of this._teclados){
            teclados += teclado.toString()
        }
        return teclados

    }

    agregarMouse(mouse){
        this._mouses.push(mouse)
    }

    mostrarMouse(){
        let mouses = ""
        for(let mouse of this._mouses){
            mouses += mouse.toString()
        }
        return mouses
    }

    toString(){
        return `Computadora ${this.idComputadora}: ${this.nombre} \n ${this.mostrarMonitores()} \n ${this.mostrarTeclado()} \n ${this.mostrarMouse()}`
    }

}

let computadora1 = new Computadora("HP")
let computadora2 = new Computadora("DELL")
let computadora3 = new Computadora("LENOVO")
// console.log(computadora1.toString()) // Monitor [ idMonitor: 1 Marca: HP tamaño:  23]

computadora1.agregarMonitor(monitor1)
computadora1.agregarTeclado(teclado1)
computadora1.agregarMouse(raton1)
computadora1.mostrarMonitores()
computadora1.mostrarTeclado()
computadora1.mostrarMouse()
//console.log(computadora1.toString())

computadora2.agregarMonitor(monitor2)
computadora2.agregarTeclado(teclado2)
computadora2.agregarMouse(raton2)
computadora2.mostrarMonitores()
computadora2.mostrarTeclado()
computadora2.mostrarMouse()


computadora3.agregarMonitor(monitor3)
computadora3.agregarTeclado(teclado3)
computadora3.agregarMouse(raton3)
computadora3.mostrarMonitores()
computadora3.mostrarTeclado()
computadora3.mostrarMouse()
//console.log(computadora2.toString())
//console.log(computadora3.toString())

class Orden {

    static ContadorOrdenes = 0

    constructor(){
        this._idOrden = ++Orden.ContadorOrdenes
        this._Ordenes = []
    }
    get idOrden(){
        return this._idOrden
    }

    agregarComputadora(computadora){
        this._Ordenes.push(computadora, "\n")
    }

    mostrarOrdenComputadoras(){
        let ordenes = ""
        for(let orden of this._Ordenes){
           ordenes += orden.toString() 
        }
        return ordenes
    }
    toString(){
        return `Orden: ${this.idOrden}, Computadoras: \n ${this.mostrarOrdenComputadoras()}`
    }
}

let orden1 = new Orden("")
orden1.agregarComputadora(computadora1)
orden1.agregarComputadora(computadora2)
console.log(orden1.toString())

//console.log(computadora1)
let orden2 = new Orden("")
orden2.agregarComputadora(computadora3)
console.log(orden2.toString())
