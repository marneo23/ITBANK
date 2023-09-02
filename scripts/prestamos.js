const cuentaSelectPrestamos = document.getElementById("selectCuentas");
const importeInput = document.getElementById("importe");
const cuotasInput = document.getElementById("cuotas");
const previewPrestamo = document.querySelector(".previewPrestamo");


importeInput.addEventListener('input', updatePrestamoPreview);
cuotasInput.addEventListener('input', updatePrestamoPreview);

importeInput.addEventListener('input', prestamoLimit);
cuotasInput.addEventListener('input', cuotasLimit);

function updatePrestamoPreview() {
    const importe = Number(importeInput.value);
    const cuotas = Number(cuotasInput.value);

    let prestamoAPagar = importe;
    if (cuotas < 6) {
        prestamoAPagar *= 1.2;
    } else if (cuotas >= 6) {
        prestamoAPagar *= 2;
    } else if (cuotas >= 12) {
        prestamoAPagar *= 3;
    } else if (cuotas >= 24) {
        prestamoAPagar * 5
    }

    previewPrestamo.innerHTML = `$${Math.trunc(prestamoAPagar)}`;
}

function prestamoLimit() {
    const prestamoMaximo = 1000000;
    const prestamoSolicitado = Number(importeInput.value);

    if (prestamoSolicitado > prestamoMaximo) {
        importeInput.value = prestamoMaximo;
    }
}

function cuotasLimit() {
    const cuotasMaximo = 24;
    const cuotasSolicitado = Number(cuotasInput.value);

    if (cuotasSolicitado > cuotasMaximo) {
        cuotasInput.value = cuotasMaximo;
    } else if (cuotasSolicitado < 1) {
        cuotasInput.value = "1";
    }
}