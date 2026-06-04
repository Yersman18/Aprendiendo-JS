class Persona{

    static contadorObjetosPersona = 0; // atributo no estatico

    email = "valor default email"// atributo estatico 

    constructor(nombre, apellido){
        this._nombre = nombre
        this._apellido = apellido 
        Persona.contadorObjetosPersona ++  
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
        return this.nombre + " " + this.apellido
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

let persona2 = new Empleado("Yersman", "Cruz")


//Persona.saludo() //saludos desde un metodo estatico

//console.log(persona1.saludo()) // TypeError: persona1.saludo is not a function

// Empleado.saludo() desde la clase hija (Empleado) podemos llamar al meotodo static


Persona.saludar2(persona1)

console.log(Persona.contadorObjetosPersona)





console.log(persona1.email) // valor default email
console.log(Empleado.email) // undefined



