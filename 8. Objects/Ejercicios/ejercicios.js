/*/ crear una base mas metodo
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido  
    }
    get NombreCompleto(){
        return ` Hola, soy ${this.nombre} y tengo ${this.apellido} años ` 
    }
}

let yo = new Persona ("Yersman", 19)

console.log(yo.NombreCompleto)

--------------------------------------------------------------------------------
*/

class Usuario{
    constructor(_correo){
        this._correo = _correo
    }
    get correo(){
        return this._correo
    }
    set correo(correo){
        if (correo.includes("@")){
            .
        }
    }

}

let yoCorreo = new Usuario("Yersmangarzon")







