const miInfo = {
    nombre: "Edwin",
    apellido: "Cala",
    edad: 24,
    altura: 1.7,
    eresDesarrollador: true
};

const miEdad = miInfo["edad"];

console.log(miEdad);

const listaAmigos = [
    miInfo,
    {
        nombre: "Hernán",
        apellido: "Bautista",
        edad: 24,
        altura: 1.72,
        eresDesarrollador: true
    },
    {
        nombre: "Carlos",
        apellido: "Laiton",
        edad: 27,
        altura: 1.75,
        eresDesarrollador: false
    }
];

let amigosOrdenados = listaAmigos.sort((a, b) => b.edad - a.edad);
console.log(amigosOrdenados);
