//set es para modificar los valores de los atributos del obejto

persona = {
    nombre : "Esteban",
    apellido : "Garzon",
    idioma : "es",
    get nombreCompleto() {
        return `${this.apellido} ${this.nombre} `
    },
    get lang(){
        return this.idioma.toUpperCase()
    },
    set lang(lang){
        this.idioma = lang.toUpperCase()  // aqui volvemos a llamar a lang y en el parametro que le estamos pasando es de la anterior propiedad que creamos
    },
}

persona.lang = "en"
console.log(persona.lang)