const eyeButtons = document.querySelectorAll(".eyeOpen")
const selectCuentas = document.getElementById("selectCuentas");

function hideCash(event) {

    const eyeButton = event.target;
    const saldo = eyeButton.previousElementSibling;

    if (!eyeButton.src.includes("closed")) {
        eyeButton.src = "../assets/icons/eye-closed.png";
        eyeButton.alt = "Mostrar Saldo"
        saldo.textContent = `Saldo: ***`;
      } else {
        eyeButton.src = "../assets/icons/eye.svg";
        saldo.textContent = `Saldo: $0`;
        eyeButton.alt = "Ocultar Saldo"
    }
}

eyeButtons.forEach(eyeButton => {
    eyeButton.addEventListener("click", hideCash);
});
