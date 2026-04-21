class Persona{

    static ContadorObjetosPersona = 0

    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
        Persona.ContadorObjetosPersona++
    }
    get nombre(){
        return this._nombre  
    }
    set nombre(valor){
        this._nombre = valor
    }
    get apellido(){
        return this._apellido
    }
    set apellido(valorAp){
        this._apellido = valorAp
    }
    static nombreCompleto(){
        console.log ("Saludo desde un metodo estatico")
    }
    static saludo(valor){ // Esta esperando que le pasen un objeto
        console.log(valor.nombre, valor.apellido)
    }

      
}

let per = new Persona("Esteban", "Garzon")
//console.log(per.nombre) // nos arroga el valor que contiene la proiedad que creamos

//per.nombre = "Daniel"
//console.log(per.nombre) // nos arrroga el nombre que agregamos al objeto

console.log(Persona.ContadorObjetosPersona)

Persona.nombreCompleto() // nos arroga el saludo
Persona.saludo(per)


