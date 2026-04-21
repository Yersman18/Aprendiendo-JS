/*
class Usuario{
    constructor(nombre, correo){
        this.nombre = nombre
        this.correo = correo
    }
    get nombre(){
        return this._nombre.toUpperCase()
    }
    set nombre(valor){
        if (valor.length < 3){
            console.log("No puedes agregar un nombre menor de tres caracteres")
        }
        else 
            this._nombre = valor.toUpperCase()
    }
    get correo(){
        return this._correo
    }
    set correo(valor2){
        if (valor2.includes("@")){
            this._correo = valor2
        }
        else
            console.log("El correo no es valido")
    }
    saludo(){
        return (`Hola soy ${this.nombre} y mi correo es ${this.correo}`)

    }
}


//1 Guardar el nombre mayor o igual d 3 caracteres
let user = new Usuario("yer", "correo_mal@")

user.nombre = "Yer"
user.correo = "yersmangarzon@gmail.com"

console.log(user.saludo())
  
*/

