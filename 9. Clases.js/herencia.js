// metodos get y set dentro de las clases 

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre
        this._apellido = apellido
    }
    get nombre(){
        return this._nombre 
    }
    set nombre(nombre){
        this._nombre = nombre.toUpperCase()
    }

}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido)//  MUY IMPORTANTE PARA PODER HACER LA HERENCIA DE LA CLASE PADRE
        this._departamento = departamento
    }
    get departamento(){
        return this._departamento
    }
    set departamento(departamento){
         this._departamento = departamento
    }
}

let empleado1 = new Empleado("Yersman", "Cruz", "Cundinamarca")
console.log(empleado1) // get nombre
console.log(empleado1.nombre) // si esta heredando de la clase padre

empleado1.departamento = "Girardota"
console.log(empleado1.departamento) // nos retorn el valor de Girardota
