const ejercicio = (n) => {
    console.time("for");
    n = 10;
    let i;
    for (i = 0; i < n/2 ; i+= 2) {
        console.log(i);       
    }
    console.timeEnd("for")
}

ejercicio(10);
