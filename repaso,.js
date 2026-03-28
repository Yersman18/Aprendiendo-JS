// Ejercicios de arreglos
// 1. Recorrer un arreglo
/*
let numeros = [10, 20, 30, 40];

for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}
*/

// 2. Sumar elementos\
let numeromayor = 1;
let SumaNumeros = [1, 70, 3, 100, 66];

for (let i = 0; i < SumaNumeros.length; i++) {
    if(SumaNumeros[i] > numeromayor ){
        numeromayor = SumaNumeros[i]
    }
}
console.log(numeromayor)
