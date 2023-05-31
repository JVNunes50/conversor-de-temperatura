function converterTemperatura() {
    var temperaturaFahrenheit = parseFloat(document.getElementById("temperature-input").value);
    var temperaturaCelsius = (temperaturaFahrenheit - 32) * 5 / 9;
    document.getElementById("result").textContent = "Temperatura em Celsius: " + temperaturaCelsius.toFixed(2);

    if (temperaturaCelsius > 30) {
      document.body.style.backgroundColor = "orange";
    } else {
      document.body.style.backgroundColor = "lightblue";
    }
}
