/**
 * Ejemplo de Como Utilizar la Libreria de Yargs
 * node ActividadesClase/IndexYargs.js --numerroA=10
 */

 // 1. Importar el Archivo
 // 2. Capturar los Argumentos Ingresados por argv  
 
 const yargs = require("yargs");
 const argumentos = yargs.argv;

 // 3. Capturar los Argumentos con --Nombre = Valor
 // Para capturar el valor  se pone argumento.Nombre
 console.log(argumentos)
 console.log(argumentos.numeroA)
 