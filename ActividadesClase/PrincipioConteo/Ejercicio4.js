const TresCifras = () => {
    let numCifras = 999;
    let contador = 1;

    for (let i = 0; i <= numCifras; i++) {
        if(i >= 100){
            console.log(contador , " El numero es: " , i)  
            contador++;      
        }    
    }
}

TresCifras();