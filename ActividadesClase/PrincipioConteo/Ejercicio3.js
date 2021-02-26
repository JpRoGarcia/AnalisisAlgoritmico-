const Diplomacia = () => {
    let Paises = 20;
    let Embajador = 20;
    let contador = 1;

    for (let i = 1; i <= Paises; i++) {
        for (let j = 1; j <= Embajador; j++) {
            if(i != j){
                console.log(contador, "Resultados: " , "Pais: " , i, " y Enbajador pais: " , j )
                contador++;
            }
        }      
    }
}

Diplomacia();