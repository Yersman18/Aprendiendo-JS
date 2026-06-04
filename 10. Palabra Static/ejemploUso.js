class Persona{

    static contadorPersonas = 0; // atributo  estatico

    email = "valor default email"// atributo no estatico 


    constructor(nombre, apellido){
        this._nombre = nombre
        this._apellido = apellido 
        this.idpersona = ++Persona.contadorPersonas 
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



console.log(persona1.toString())
console.log(empleado2.toString())


