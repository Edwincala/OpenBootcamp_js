const fecha_nacimiento = new Date("November 20 1998");
const fecha_de_nacimiento = `${fecha_nacimiento.getDate()}-${
    fecha_nacimiento.getMonth() + 1
}-${fecha_nacimiento.getUTCFullYear()}`;

const fecha_publicacion = new Date("January 29 2013");
const fecha_de_publicacion = `${fecha_publicacion.getDate()}-${
    fecha_publicacion.getMonth() + 1
}-${fecha_publicacion.getUTCFullYear()}`;

const persona = {
    nombre: "Edwin Cala",
    edad: 24,
    isDeveloper: true,
    "fecha-de-nacimiento": fecha_de_nacimiento,
    "libro-favorito": {
        titulo: "Quiet: The Power of Introverts in a World That Can't Stop Talking",
        autor: "Susan Cain",
        "fecha-de-publicacion": fecha_de_publicacion,
        url: "https://www.amazon.com/-/es/Susan-Cain/dp/0307352153/ref=sr_1_1?keywords=quiet+the+power+of+introverts+in+a+world+that+can%27t+stop+talking&qid=1682223424&s=books&sprefix=El+poder%2Cstripbooks-intl-ship%2C137&sr=1-1"
    }
};
