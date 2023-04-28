const button = document.getElementById("btn");

button.addEventListener("click", () => {
    alert("click en el botón");
});

$(() => {
    $("#btn").click(function () {
        console.log("Hola, estoy utilizando jQuery");
    });
});
