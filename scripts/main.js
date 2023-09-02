const dropDownMenuButton = document.querySelector(".dropDownMenu");
const navigationMenu = document.querySelector(".navigationMenu");

//toggle para el nav
dropDownMenuButton.addEventListener("click", function () {
    navigationMenu.classList.toggle("hidden")
});

//Si ocultabas el menú en mobile y volvías tamaño completo, el nav desaparecía. esto lo fixea.
//Lo malo: hace muchos llamados a la función, pero en un proyecto pequeño no debería traer problemas.
function checkViewportWidth() {
    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth >= 840) { // valor de la MQ
        navigationMenu.classList.remove("hidden")
    }
}
checkViewportWidth();
window.addEventListener("resize", checkViewportWidth); //TO DO: investigar debouncer o throttler
