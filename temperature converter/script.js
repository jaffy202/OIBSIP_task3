document.getElementById('convertBtn').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperature').value;
    const unitSelect = document.getElementById('unit');
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;
    const resultElement = document.getElementById('result');
    
    if (!isNaN(temperatureInput)) {
        let convertedTemperature;
        if (selectedUnit === 'celsius') {
            convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
            resultElement.textContent = `${temperatureInput}°C is equal to ${convertedTemperature.toFixed(2)}°F`;
        } else {
            convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
            resultElement.textContent = `${temperatureInput}°F is equal to ${convertedTemperature.toFixed(2)}°C`;
        }
    } else {
        resultElement.textContent = 'Please enter a valid number for temperature.';
    }
});