/*
* Comentario Bloque
*/

//Comentario Linea
//TODO: Ejemplo de la Extencion TODO
//BUG:  Ejemplo de la Extencion TODO

// Variables 

var edad = 19;
let nombre = "Juan";
const ESTADO_OK  = "OK";

//Tipos de Datos
// String, number , boolean , null, undefinid, object, array

let est_nombre = "yo";
let est_edad = 15;
let est_saldo = 12.5;
let est_activo = true;
let est_materia = null;
let est_matricula;
let est_curso_actual = { nombre:'Analisis', id:123 }
let cursos = ["Introduccion", "Calculo"]

//Imprimir

console.log(est_nombre, est_edad)
console.error(est_saldo)
console.info(cursos)

// typeof - verificar tipo de variable

console.log("--------------")
console.log(typeof est_nombre, typeof est_edad)

// Conversiones 

console.log("--------------")
console.log(parseInt("8.5"));
console.log(parseFloat("8"));

//Operaciones 
// >, >=, <, <=, %, ++, --
// == : compara el valor
// === : compara el valor y el tipo
// !=
// !==

console.log("1" == 1);
console.log("1" === 1);

//Concatenar
// " " + " "
//`${} ${}`

console.log("------- 8 -------")
console.log(est_nombre + " soy " + est_activo)
console.log(`${est_nombre} ${est_activo}`)

// Operacion Ternario
// condicion ? true : false

console.log("------- 9 -------")
console.log(est_edad > 25 ? "Es Mayor a 25" : "Es Menos q 25")
console.log(est_edad > 10 ? "Es Mayor a 10" : "Es Menos q 10")

// Condicionales 

if (est_edad > 25) {
    console.log("Es Mayor a 25")
} else {
    console.log("Es Menor a 25")
}

switch (est_edad) {
    case 15:      
        break;

    default:
        break;
}

//CIclos

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

while (condition) {
    
}

do {
    
} while (condition);

// Funciones 

function Wenas() {  
}

const imprimirCurso = () => {
}
