class Usuario{
    constructor(nombre){
        this.nombre = nombre
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    // toString(){
    //     return this._nombre
    // }
}


let per = new Usuario("Esteban")
console.log(per.toString())

