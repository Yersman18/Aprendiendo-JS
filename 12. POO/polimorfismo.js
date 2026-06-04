class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre
        this.sueldo = sueldo
    }
    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre} sueldo ${this.sueldo} `
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo)
        this.departamento = departamento
    }
    obtenerDetalles(){
        return `${super.obtenerDetalles()} departamento  ${this.departamento}`
    }

}

function imprimir(tipo){
    console.log(tipo.obtenerDetalles()) // Obtenemos los detalles del objeto que le indiquemos 
}

let empleado1 = new Empleado("Esteban", 23000)
let gerente1 = new Gerente("Yersman", 20000, "Sistemas")


// Esto le llamamos polimorfismo la mismia propiedad pero diferentes nos arroga diferentes datos 
imprimir(empleado1) // llamamos al metodo de la clase padre (obtenerDetalles())
imprimir(gerente1) // llamamos al metodo de la clase hja (obtenerDetalles())




