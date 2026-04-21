

// sobrbeescritura y clases hijas y herencia de metodos
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
    nombreCompleto(){
        return this._nombre + " " + this._apellido
    }
    // Sobreescrbiendo el metodo de la clase Padre (Object)
    toString(){
        // se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        // el metodo que se ejecuta depende si es una referencia de tipo padre
        // o de tipo hijo
        return this.nombreCompleto()
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
    // sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ", " +  this._departamento
    }
}

let empleado1 = new Empleado("Yersman", "Cruz", "Cundinamarca")
console.log(`Mi nombre completo es ${empleado1.nombreCompleto()}`) // si esta heredando de la clase padre
console.log(`Nombre con metodo toString de la clase hija ${empleado1.toString()}`) // get nombre



let per = new Persona ("Yersman", "Garzon")
console.log(per.toString())


// empleado1.departamento = "Girardota"
// console.log(empleado1.departamento) // nos retorn el valor de Girardota
 