// ให้เขียนฟังก์ชันแปลงอุณหภูมิจาก farenheit เป็น celsius

const fahrenheitToCelsius = fahrenheit => {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
};

const temperatureInFahrenheit = 98.6;
const temperatureInCelsius = fahrenheitToCelsius(temperatureInFahrenheit);
console.log(temperatureInCelsius.toFixed(2)); // 37.00
