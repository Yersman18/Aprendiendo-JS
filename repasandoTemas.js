// HERENCIA
class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre
        this._apellido = apellido
    }
    get nombre(){
        return this._nombre.toUpperCase()
    }
    set nombre(nombre){
        this._nombre = nombre.toUpperCase()
    }
    nombreCompleto(){
        return `Hola mi nombre es ${this.nombre.toUpperCase()} ${this._apellido.toUpperCase()}` 
    }
    toString(){
        return this.nombreCompleto()
    }
    
}

//let per = new Persona ("Esteban", "Garzon") // creamos el objeto
//console.log(per.nombre) // arogamos el valor de la nueva clase creada

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido)
        this._departamento = departamento
    }
    get departamento(){
        return this._departamento.toUpperCase()  
    }
    set departamento(departamento){
        this._departamento = departamento.toUpperCase()
    }
    departamentoinfo(){
        return `y en el departamento que yo vivo es el de ${this._departamento.toUpperCase()}`
    }
}

let empleado1 = new Empleado ("Daniel", "Bernal", "Cundinamarca")
//console.log("Departamento: ", empleado1.departamento()) // nos arroga el valor del atributo agregado a la clase hija de clase de persona (padre)

console.log(`${empleado1.nombreCompleto()} ${empleado1.departamentoinfo()}`)

//console.log(empleado1.toString()) // DANIEL BERNAL
