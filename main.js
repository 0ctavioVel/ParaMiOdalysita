// // Aseguramos que el script se ejecute apenas la página cargue
// document.addEventListener("DOMContentLoaded", function () {
//     document.body.classList.remove("container"); // Elimina la clase "container" si existe

//     // Primer SweetAlert
//     Swal.fire({
//         title: "Un pequeño detalle",
//         text: "Que representa mi gran cariño 🥹",
//         background: "#ffd2fe ",
//         allowOutsideClick: false, // Evita que el usuario lo cierre fuera del botón
//         confirmButtonText: "Continuar",
//         confirmButtonColor: "#ff69b4",
//         color: "white"
//     }).then(() => {
//         // Segundo SweetAlert
//         Swal.fire({
//             title: "TQM ODALYSITA",
//             text: "Espero te guste",
//             imageUrl: "img/ntgf.gif",
//             imageWidth: 250, // Ajusta el tamaño del GIF
//             imageHeight: "auto",
//             background: "#ffd2fe ",
//             allowOutsideClick: false,
//             confirmButtonText: "Continuar"
//         });
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar todos los elementos con animaciones
    const animatedElements = document.querySelectorAll(
        '.flower, .flower--1, .flower--2, .flower--3, .flower--4, ' +
        '.flower__line__leaf, .flower__light, .flower__grass, ' +
        '.flower__g-long, .flower__g-right, .flower__g-front, .flower__g-fr, ' +
        '.long-g .leaf, .grow-ans, .growing-grass, .flower__grass__leaf, ' +
        '.flower__leafs, .flower__g-long__top, .flower__g-long__bottom, ' +
        '.flower__g-right .leaf, .flower__g-fr .leaf, .flower__g-fr__leaf, ' +
        '.flower__g-front__leaf, .flower__g-front__leaf-wrapper, ' +
        '.flower--1 .flower__line, .flower--2 .flower__line, ' +
        '.flower--3 .flower__line, .flower--4 .flower__line'
    );

    // Pausar todas las animaciones al inicio
    animatedElements.forEach(element => {
        element.style.animationPlayState = 'paused';
    });

    // Mostrar el primer SweetAlert
    Swal.fire({
        title: "Un pequeño detalle",
        text: "Que representa mi gran cariño 🥹",
        background: "#ffd2fe",
        allowOutsideClick: false, // Evita que el usuario cierre el SweetAlert haciendo clic fuera
        confirmButtonText: "Siguiente",
        confirmButtonColor: "#ff69b4",
        color: "white"
    }).then(() => {
        // Mostrar el segundo SweetAlert
        Swal.fire({
            title: "TQM ODALYSITA",
            text: "Espero te guste",
            imageUrl: "img/ntgf.gif",
            imageWidth: 250, // Ajusta el tamaño del GIF
            imageHeight: "auto",
            background: "#ffd2fe",
            allowOutsideClick: false,
            confirmButtonText: "Continuar",
            confirmButtonColor: "#ff69b4",
        }).then(() => {
            // Iniciar todas las animaciones después de hacer clic en "Continuar"
            const backgroundMusic = document.getElementById("background-music");
            animatedElements.forEach(element => {
                element.style.animationPlayState = 'running';
            });
            backgroundMusic.volume = 0.5; // Ajusta el volumen
            backgroundMusic.play();
        });
    });
});