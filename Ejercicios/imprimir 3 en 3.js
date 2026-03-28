// imprimir los primeros 10 numero de 3 en 3 en foroma negativa y positiva
/*
for(let numero = 1; numero < 11; numero += 3){
    console.log(numero)
}

for(let numeroNegativo = 1; numeroNegativo >= -10; numeroNegativo -= 3){
    console.log(numeroNegativo)
}
*/
//------------------------------------------------------------------------------
// Suma acumulativa
maximo = 5
acumulativo = 0// declaramos la variable que va acumular la suma (NO VA ADENTRO DEL CICLO FOR)
/*
for(let numero = 1 ; numero <= maximo; numero++ ){ // Las variables dentro del ciclo for solo existen una vez y desaparece
    acumulativo += numero
    console.log(acumulativo)
}*/


let _numero = 0
while (_numero < maximo){
    _numero ++
    acumulativo += _numero
    console.log(acumulativo) 
}

