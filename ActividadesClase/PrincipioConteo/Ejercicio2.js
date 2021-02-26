const BaileEscolar = () => {
    let nroboys = 9;
    let nrogirls = 7;
    let contador = 1;

    for (let i = 1; i <= nroboys; i++) {
        for (let j = 1; j <= nrogirls; j++) {
            console.log(contador, "Resultados: " , "Niño: " , i, " y Niña: " , j )
            contador++;
        }      
    }
}

BaileEscolar();