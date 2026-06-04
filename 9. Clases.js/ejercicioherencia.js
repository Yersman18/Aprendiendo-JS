// creamos la clase padre que persona 
class Persona{

    static contadorpersonas = 0 // el contaador que nos va llevar de las personas

    constructor(nombre, apellido, edad){
        this._idpersona = ++Persona.contadorpersonas
        this._nombre = nombre
        this._apellido = apellido
        this._edad = edad 
    }
    get idpersona(){
        return this._idpersona
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
    get edad(){
        return this._edad
    }
    set edad(edad){
        this._edad = edad 
    }
    toString(){
        return `${this.idpersona} Soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años `
    }
}

// per1 = new Persona("Esteban", "Garzon", 19)
// console.log(per1.nombre) // accedemos al atributo de nombre de la clase persona

per1 = new Persona("Esteban", "Garzon", 19)
per1.nombre = "Pepe"
per1.apellido = "Pepito" 
console.log(per1.toString()) 
per2 = new Persona("Daniel", "Bernal", 24)
console.log(per2.toString()) // nos imprime a los objetos creados

class Empleado extends Persona{
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad)
        this._sueldo = sueldo
        this._idempleado = Persona.contadorpersonas 
    }
    get idempleado(){
        return this._idempleado
    }
    get sueldo(){
        return this._sueldo
    }
    set sueldo(sueldo){     
    }
    toString(){
        return `${this.idempleado} Soy ${this.nombre} ${this.apellido} soy un empleado y tengo ${this.edad} años y mi sueldo es de ${this.sueldo} pesos colombianos`
    }
}

empleado3 = new Empleado ("Sebastian", "Armando", 22, 23000)
console.log(empleado3.toString())

class Cliente extends Persona{
    constructor(nombre, apellido, edad){
        super(nombre, apellido, edad)
        this._fecharegistro = new Date() // aqui es donde aplica la fecha
        this._idCliente = Persona.contadorpersonas
    }
    get idcliente(){
        return this._idCliente
    }
    get fecharegistro(){
        return this._fecharegistro
    }
    set fecharegistro(fecharegistro){
        this._fecharegistro = fecharegistro
    }
    toString(){
        return `${this.idcliente} Soy ${this.nombre} ${this.apellido} soy un cliente y tengo ${this.edad} años y la fecha que me registre fue el ${this.fecharegistro}`
    }
}

cliente4 = new Cliente("Carlos", "Hernandez", 45)

// cliente4.fecharegistro = "2018/01/30 23:30:14"
console.log(cliente4.toString())