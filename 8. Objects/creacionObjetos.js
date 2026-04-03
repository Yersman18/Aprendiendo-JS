let personaDos =  new Object() // creanddo un objeto mas simplificado

personaDos.nombre = "Esteban"
personaDos.apellido = "Garzon"
personaDos.funcionNombre = function (){ return this.nombre + " " + this.apellido }

console.log(personaDos.funcionNombre())