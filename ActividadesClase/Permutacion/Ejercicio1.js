

const ejercicio1 = () => {
    let array = [3, 4, 5]
    let Nuevo = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(i != j)
            {
                Nuevo.push(i * 10 + j)
            }
        
        }
    }
}

ejercicio1();

