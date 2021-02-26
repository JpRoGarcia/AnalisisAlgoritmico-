const Biblioteca = () => {
    let nroLibrosEstadistica = 5;
    let nroLibrosMatematica = 7;
    let contador = 1;

    for (let i = 1; i <= nroLibrosEstadistica; i++) {
        console.log(contador, "Libro de Estadistica del autor: " , i)
        contador++;
    }

    for (let j = 1; j <= nroLibrosMatematica; j++) {
        console.log(contador, "Libro de Matematica del autor: " , j )
        contador++;
    }  
}

Biblioteca();