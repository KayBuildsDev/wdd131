// Footer: current year and last modified date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = document.lastModified;

// Static weather values (must match the numbers shown on the page)
const temperature = 8; // °C
const windSpeed = 20; // km/h

// Metric wind chill formula (°C, km/h)
function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16).toFixed(1);
}

// Only calculate when wind chill applies: temp <= 10 °C and wind > 4.8 km/h
const windChill = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChill.textContent = "N/A";
}
