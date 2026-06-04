class Producto{

    static contadorProducto = 0
    
    constructor(nombre, precio){
        this._nombre = nombre
        this._precio = precio
        this._idproducto = ++Producto.contadorProducto
    }
    get idproducto(){
        return this._idproducto
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    get precio(){
        return this._precio
    }
    set precio(precio){
        this._precio = precio
    }
    toString(){
        return ` ${this._idproducto} ${this.nombre} ${this.precio} `
    }
}

class Orden {

    static contadorOrdenes = 0

    static get MAX_OBJECT(){
        return 4
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes
        this._productos = []
        this._contadorProductosAgregados  = 0
    }

    get idOrden(){
        return this._idOrden
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_OBJECT){
            this._productos.push(producto)
            //this._productos[this._contadorProductosAgregados] = producto otra manera de agregar un producto a la orden
        }   
        else{
            console.log( "No se pueden agregar mas productos")
        }     
    }
    
    calcularTotal(){
        let totalVenta = 0
        for(let producto of this._productos){
            totalVenta += producto.precio // totalVenta = totalVenta + producto.precio
        }
        return totalVenta
    }

    mostrarOrden(){
        let productosOrden = ''
        for(let producto of this._productos){
            productosOrden += producto.toString()
        }
        console.log(`Orden ${this.idOrden} Total ${this.calcularTotal()} Productos ${productosOrden}`)
    }

}


let prod1 = new Producto("Manzana", 2300)
let prod2 = new Producto("Pera", 23450)


let orden1 = new Orden()
orden1.agregarProducto(prod1)
orden1.agregarProducto(prod2)

orden1.mostrarOrden()