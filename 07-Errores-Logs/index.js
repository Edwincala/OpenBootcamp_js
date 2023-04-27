const logger = require("./logger");

function suma(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("Los valores a sumar deben ser de tipo numérico!");
}

try {
    const resultado = suma(5, "4");
    logger.log(`El resultado de la suma es: ${resultado}`);
} catch (e) {
    logger.error(`Se encontró un problema: ${e}`);
}
