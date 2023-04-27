function fibonacci(num) {
    let inicio = 1;
    const secuencia = [inicio];

    while (secuencia.length < num) {
        secuencia.push(inicio);
        inicio += secuencia[secuencia.length - 2];
    }

    return secuencia;
}

console.log(fibonacci(10));
