const nombre = "Edwin";
const apellido = "Cala";

const persona = {
    nombre,
    apellido
};

sessionStorage.setItem("personaSession", JSON.stringify(persona));

localStorage.setItem("personaLocal", JSON.stringify(persona));

let expires = new Date(Date.now() + 2000).toUTCString();
console.log(expires);

document.cookie =
    "personaCookie=" + JSON.stringify(persona) + ";expires=" + expires;
