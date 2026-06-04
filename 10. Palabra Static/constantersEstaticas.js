class Persona{

    static contadorPersonas = 0; // atributo no estatico

    static get MAX_OBECT(){
        return 4
    }

    constructor(nombre, apellido){
        this._nombre = nombre
        this._apellido = apellido
        if(Persona.contadorPersonas < Persona.MAX_OBECT){
            this.idpersona = ++Persona.contadorPersonas 
        } 
        else 
            console.log("Has superado el limite de objetos creados")
    
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    get apellido(){
        return this._apellido
    }
    set apellido(apellido){
         this._apellido = apellido
    }
    nombreCompleto(){
        return this.idpersona + " " + this.nombre + " " + this.apellido
    }
    toString(){
        return this.nombreCompleto()
    }
    static saludo(){
       console.log("Saludos desde metodo statico")
    }
    static saludar2(persona){
        console.log(persona.nombre, persona.apellido)
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido)
        this._departamento = departamento
    }
    get departamento(){
        return this._departamento     
    }
    set departamento(valor){
        this._departamento = valor
    }
}

let persona1 = new Persona("esteban", "Garzon")
// console.log (persona1.toString()) // esteban Garzon

let empleado2 = new Empleado("Yersman", "Cruz")

let persona3 = new Persona("Aura", "Quintin")

let persona4 = new Persona("Aura", "Quintin")

let persona5 = new Persona("Orlando", "Sarmiento")

console.log(persona1.toString())
console.log(empleado2.toString())
console.log(persona3.toString())
console.log(persona4.toString())

