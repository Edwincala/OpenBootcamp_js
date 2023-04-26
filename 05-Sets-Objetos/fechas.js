const hoy = new Date();
console.log(hoy);

const fechaNacimiento = new Date(1998, 10, 20);
console.log(fechaNacimiento);

let comparacion = hoy > fechaNacimiento;
console.log(comparacion);

const diaNacimiento = fechaNacimiento.getDate();

const mesNacimiento = fechaNacimiento.getMonth() + 1;

const anioNacimiento = fechaNacimiento.getFullYear();

console.log(diaNacimiento, mesNacimiento, anioNacimiento);
