function siempreTrue() {
    return true;
}

console.log(siempreTrue());

function despuesDe5Segundos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hola soy una promesa");
        }, 5000);
    });
}

async function asyncCall() {
    const result = await despuesDe5Segundos();
    console.log(result);
}

asyncCall();

function* generadorId() {
    let id = 0;

    while (true) {
        id += 2;
        if (id === 10) {
            return id;
        }
        yield id;
    }
}

const IdGen = generadorId();

console.log(IdGen.next().value);
console.log(IdGen.next().value);
console.log(IdGen.next().value);
console.log(IdGen.next().value);
console.log(IdGen.next().value);
