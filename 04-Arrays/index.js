let listaCompra = ["Arroz", "Pan", "Pollo", "Huevos", "Pescado"];

listaCompra.splice(2, 0, "Aceite de Girasol");
console.log(listaCompra);

listaCompra.splice(2, 1);
console.log(listaCompra);

const listaPeliculas = [
    {
        titulo: "El olvido que seremos",
        director: "Fernando Trueba",
        fecha: new Date("1 June 2021")
    },
    {
        titulo: "El Hombre Araña 2",
        director: "Sam Raimi",
        fecha: new Date("30 June 2004")
    },
    {
        titulo: "No miren arriba",
        director: "Adam McKay",
        fecha: new Date("10 December 2021")
    }
];

console.log(listaPeliculas);

const fechaComparacion = new Date("1 January 2010");

const peliculasRecientes = listaPeliculas.filter(
    (pelicula) => pelicula.fecha > fechaComparacion
);
console.log(peliculasRecientes);

const directores = listaPeliculas.map((pelicula) => pelicula.director);
console.log(directores);

const titulos = listaPeliculas.map((pelicula) => pelicula.titulo);
console.log(titulos);

const peliculasDirectores = directores.concat(titulos);
console.log(peliculasDirectores);

const peliculasDirectores2 = [...directores, ...titulos];
console.log(peliculasDirectores2);
