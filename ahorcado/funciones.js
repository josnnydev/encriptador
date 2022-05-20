function obtener_random(num_min, num_max){
    
    let amplitud_random = num_max-num_min;
    
    let palabras_aleatoria =  Math.floor(Math.random() * amplitud_random) + num_min;

    return palabras_aleatoria;

}

 