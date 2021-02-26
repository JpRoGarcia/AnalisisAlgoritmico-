
// Setencias Iterativas

function Factorial(n) {
    let acumulador = 1;
    for (let x = 1; x <= n; x++) {
        acumulador = acumulador * x      
    }

    return acumulador
}

 

function Finobaci(n) {
    let n1 = 0;
    let n2 = 0;
    let Temporal = 1;
    for (let x = 0; x <= n; x++) {
        Acumulador += Temporal;  
        Temporal     
    }
    return Acumulador
}

// Recursividad

function FactorialRecursivo(n) {
    
    if(n == 0){
        return 1;
    }
    else{
        return n * FactorialRecursivo(n - 1)
    }
}

console.log("Factorial Normal: " + Factorial(5));
console.log("Factorial Recursivo: " + FactorialRecursivo(5));
console.log("Finobacii Normal: " + Finobaci(5));

