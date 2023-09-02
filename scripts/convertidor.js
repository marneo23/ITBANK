const swapCurrencyButton = document.getElementById("swapCurrency");
const convertButton = document.getElementById("convertButton");
const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("fromCurrency");
const toCurrencySelect = document.getElementById("toCurrency");
const resultContainer = document.getElementById("resultContainer");
const resultOutput = document.getElementById("result");

  // Se define un objeto que almacena tasas de conversión entre monedas.
const conversionRates = {
    ars: { usd: 0.0029, eur: 0.0026 },
    usd: { ars: 349.98, eur: 0.92 },
    eur: { ars: 379.48, usd: 1.08 },
  };

  convertButton.addEventListener("click", () => {

// Se obtiene el monto ingresado por el usuario, las monedas de origen y destino seleccionadas.
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    if (isNaN(amount)) {
      resultOutput.textContent = "Por favor ingresa un monto válido.";
      resultContainer.style.display = "block";
      return;
    }

    if (fromCurrency === toCurrency) {
      resultOutput.textContent = "Las monedas de origen y destino son iguales.";
      resultContainer.style.display = "block";
      return;
    }

// Se calcula la tasa de conversión y el monto convertido.
    const conversionRate = conversionRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * conversionRate).toFixed(2);


    resultOutput.textContent = `${amount} ${fromCurrency.toUpperCase()} = ${convertedAmount} ${toCurrency.toUpperCase()}`;
    resultContainer.style.display = "block";
  });

  swapCurrencyButton.addEventListener("click", () => {

    const tempCurrency = fromCurrencySelect.value;
    fromCurrencySelect.value = toCurrencySelect.value;
    toCurrencySelect.value = tempCurrency;

    resultContainer.style.display = "none";
  });
