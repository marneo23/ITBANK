const facturasDetails = document.querySelector(".facturasDetails");
const facturaOptions = document.querySelectorAll(".facturaOption");
const facturaInfo = document.querySelectorAll(".facturaInfo");
const pagaraDesde = document.querySelector(".cuentaSeleccionada");
const totalDisplay = document.querySelector(".total");

//pagos
facturaOptions.forEach((facturaOption, index) => {
    //creo que era más eficiente era renderearlo dinámicamente desde un facturas.json pero no me da la cabeza ahora mismo 😴

    facturaOption.addEventListener("click", (e) => {
        e.stopPropagation();
        facturasDetails.classList.remove("hidden");

        let nombreFactura, precioFactura, fechaFactura, tipoFactura;
        //querySelectorAll genera un array de facturas
        //forEach itera sobre esas facturas, lo que nos permite utilizar su "index"
        switch (index) {
            case 0:
                nombreFactura = "Edesur";
                precioFactura = 10;
                fechaFactura = "17/8/2023";
                tipoFactura = "Electricidad";
                break;
            case 1:
                nombreFactura = "AYSA";
                precioFactura = 15;
                fechaFactura = "18/8/2023";
                tipoFactura = "Agua";
                break;
            case 2:
                nombreFactura = "Metrogas";
                precioFactura = 5;
                fechaFactura = "17/8/2023";
                tipoFactura = "Gas";
                break;
            case 3:
                nombreFactura = "Speedy";
                precioFactura = 7;
                fechaFactura = "15/8/2023";
                tipoFactura = "Internet";
                break;
            default:
                nombreFactura = "Factura Desconocida";
                precioFactura = 0;
                fechaFactura = "Sin fecha";
                tipoFactura = "Desconocido";
                break;
        }

        facturasDetails.innerHTML = `
      <dl>
        <div class="billName">
          <dt>Nombre de la empresa:</dt>
          <dd>${nombreFactura}</dd>
        </div>
        <div class="billDate">
          <dt>Fecha de vencimiento:</dt>
          <dd>${fechaFactura}</dd>
        </div>
        <div class="billType">
          <dt>Servicio declarado:</dt>
          <dd>${tipoFactura}</dd>
        </div>
        <div class="facturasPrice">
          <dt>Precio:</dt>
          <dd>$${precioFactura}</dd>
        </div>
      </dl>
    `;



        totalDisplay.innerHTML = totalPrecio
    });
});

let totalPrecio = 0;
let precioFactura = 0;
facturaOptions.forEach((checkbox, index) => {
    checkbox.addEventListener("change", (e) => {

        switch (index) {
            case 0:
                precioFactura = 10;
                break;
            case 1:
                precioFactura = 15;
                break;
            case 2:
                precioFactura = 5;
                break;
            case 3:
                precioFactura = 7;
                break;
            default:
                precioFactura = 0;
                break;
        }

        if (e.target.checked) {
            totalPrecio += precioFactura;
        } else {
            totalPrecio -= precioFactura;
        }

        totalDisplay.textContent = `$${totalPrecio}`;
    });
});
