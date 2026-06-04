class Estudiante {

    static contadorPersonas = 0

    constructor(nombre, nota) {
        this._idEstudiante = ++Estudiante.contadorPersonas
        this._nombre = nombre
        this._nota = nota
    }
    get idEstudiante(){
        return this._idEstudiante
    }
    toString(){
        return `${this._idEstudiante} ${this._nombre} - ${this._nota}`
    }
}

let per1 = new Estudiante("Esteban", 2.4)
let per2 = new Estudiante("Yersman", 3.6)
//console.log(per1.toString())

class Curso {
    constructor() {
        this._estudiantes = []
    }
    agregarEstudiante(estudiante){
        this._estudiantes.push(estudiante)
        
    }
    mostrarEstudiantes(){

        let mostrandoEstudiantes = ""

        for(let estudiante of this._estudiantes){
            mostrandoEstudiantes += estudiante.toString() + "\n"
        }
        return mostrandoEstudiantes
    }
    mostrarNombres(){
        let NombresEstudiantes = ""
        for(let estudiante of this._estudiantes){
            NombresEstudiantes += estudiante._nombre + "\n"
        }
        return NombresEstudiantes
    }
    buscarEstudiantes(nombre){

        let encontro = false

        for(let buscarnombre of this._estudiantes){
            if (nombre === buscarnombre._nombre){
                console.log("Se encontro le nombre")
                encontro = true
            }
        }
        if (!encontro){
                console.log("No se encontro el nombre")
        }
    }
    promedioNotas(){
        let mostrandopromedio = []
        
        for(let notas of this._estudiantes){
            mostrandopromedio.push(notas._nota) 
             
        }
        let sumaNotas = 0

        for(let notasg of mostrandopromedio){
            sumaNotas += notasg
        }

        let totalNotas = mostrandopromedio.length
        
        return sumaNotas / totalNotas
        
        
    }


}

let curso = new Curso()
curso.agregarEstudiante(per1)
curso.agregarEstudiante(per2)
//console.log(curso)
console.log(curso.mostrarEstudiantes())
console.log(curso.mostrarNombres())
curso.buscarEstudiantes("Yersman")
console.log(curso.promedioNotas())
