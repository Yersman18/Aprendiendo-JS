// declaracion de una matriz
// en el primer arreglo vamos almacenar el renglon
// en el segundo arreglo vamos almacenar la columna
let matriz = [[100, 200, 300], [200, 400, 500, 45]]

//console.log(matriz[0].length) // nos arroga los elementos que contiene el renglon de esa matriz
//console.log(matriz[1].length) // nos arroga los elementos que contiene el renglon de esa matriz

//console.log(matriz.length) // nos arroga los renglones que contiene la matriz

//renglones
for(let renglon = 0; renglon  < matriz.length; renglon++){
        // columnas
        for(let col = 0; col < matriz[renglon].length; col++){
            console.log(matriz[renglon][col])
        }
    }