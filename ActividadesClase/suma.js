
let numeroUno = 5;
let numeroDos = 8;
let suma;

suma = numeroUno + numeroDos

console.log(suma)

// Imprimir un numero

function Retornar(numeroUno) {
    return numeroUno
}

// Imprimir un numero al cuadrado sumandole 2

function Cuadrado(numeroUno) {
    //return (numeroUno ** 2 ) + 2
    return (numeroUno*numeroUno) + 2 
}

// Imprimir los numeros del 1 al 100 

function Cien(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i)     
    }
}

// Imprimir la suma de 100 numeros
function SumaCien(n) {

    let Sumatoria = 0

    for (let i = 1; i <= n; i++) {
        Sumatoria+=i     
    }
     
    return Sumatoria
}

// Imprimir la suma de 100 numeros OPtimizada
function SumaCienO(n) {
    return (n * (n + 1)) / 2;
}


function TablaMultiplicar(m, n) {
    for (let i = 1; i <= m; i++) {

        console.log("---- Tabla del " + i +" ----")

        for (let j = 0; j <= n; j++) {
            
            console.log(i + " * " + j + " = " + (i*j));
        }
    }
}


console.time("imprimirNumero")
console.log(TablaMultiplicar(10, 15))
console.timeEnd("imprimirNumero")