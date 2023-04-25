let nombre = "Edwin";

let apellido = "Cala";

let estudiante = nombre.concat(" ", apellido);

console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();

console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();

console.log(estudianteMinus);

const estudianteLength = estudiante.length;

console.log(estudianteLength);

let primeraLetra = nombre[0];

console.log(primeraLetra);

let ultimaLetra = apellido[apellido.length - 1];

console.log(ultimaLetra);

// regex /\s para buscar los espacios en el string
let estudianteSinEspacios = estudiante.replace(/\s/g, "");

console.log(estudianteSinEspacios);

let nombreIncluido = estudiante.includes(nombre);

console.log(nombreIncluido);
