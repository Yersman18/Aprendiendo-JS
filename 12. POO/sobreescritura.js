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
        return `${super.obtenerDetalles} departamento ${this.departamento}`
    }

}

let empleado1 = new Empleado("Esteban", 23000)
console.log(empleado1)

let gerente1 = new Gerente("Yersman", 20000, "Sistemas")
console.log(gerente)