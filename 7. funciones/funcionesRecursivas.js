// Funciones recursivas
// imprimir 3, 2, 1

function cuentaRegresiva(n) {
  // Caso base: parar cuando n sea 0
  if (n === 0) {
    console.log("¡Despegue!");
    return;
  }
  console.log(n);
  // Llamada recursiva
  cuentaRegresiva(n - 1);
}
cuentaRegresiva(3);
// Salida: 3, 2, 1, ¡Despegue!