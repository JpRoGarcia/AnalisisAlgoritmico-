const Ropero = () => {
    let nroVestido = 4;
    let nroDeportivo = 5;
    let contador = 0;

    for (let i = 1; i <= nroVestido; i++) {
        contador++;
        console.log(contador , " Vestidos: " , i)        
    }

    for (let j = 1; j <= nroDeportivo; j++) {
        contador++;
        console.log(contador , "ConjutoDeportivo: " , j)        
    }
}

Ropero();