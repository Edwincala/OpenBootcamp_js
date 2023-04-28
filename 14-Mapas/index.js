// script para añadir la API KEY desde un archivo de variables de entorno
import { API_KEY } from "./API_KEY.js";

const body = document.querySelector("body");
const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap&v=weekly`;

body.appendChild(script);

// Para trabajar con la API de MAPS:

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: { lat: 4.658152, lng: -74.0935541 }
    });
    setMarkers(map);
}

const places = [
    ["Parque Simón Bolívar", 4.658152, -74.0935541],
    ["Parque Lleras", 6.207836, -75.56714],
    ["Barú", 10.1428516, -75.6899743]
];

function setMarkers(map) {
    for (let i = 0; i < places.length; i++) {
        const place = places[i];

        new google.maps.Marker({
            position: { lat: place[1], lng: place[2] },
            map,
            title: place[0]
        });
    }
}

window.initMap = initMap;
