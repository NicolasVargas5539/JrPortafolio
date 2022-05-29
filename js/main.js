window.addEventListener("scroll", function () { //Detecnta el scroll y realiza la funcion.
    let header = document.querySelector("nav");
    header.classList.toggle("nav__abajo", window.scrollY > 0); //cada que vajemos un poco se realizara una clase al header
})

function initMap() {
    const cord = { lat:4.6416877, lng: -74.1520707 };
    // The map, centered at google
    const map = new google.maps.Map(
        document.getElementById("map"), {
        zoom: 15,
        center: cord,
    });
    const marker = new google.maps.Marker({
        position: cord,
        map: map,
    });
}

