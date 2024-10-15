// app.js
function calculateFootprint() {
    // Get user inputs
    const distance = parseFloat(document.getElementById("distance").value);
    const transportType = document.getElementById("transportType").value;
    const electricity = parseFloat(document.getElementById("electricity").value);
    const diet = document.getElementById("diet").value;
    const meals = parseInt(document.getElementById("meals").value);
    const waste = parseFloat(document.getElementById("waste").value);

    // Emission factors
    const emissionFactorsTransport = { car: 0.2, bus: 0.1, bike: 0 }; // kg CO2/km
    const emissionFactorElectricity = 0.5; // kg CO2/kWh
    const dietEmissionFactors = { meat: 5, vegetarian: 2.5, vegan: 1.5 }; // kg CO2 per meal
    const emissionFactorWaste = 0.3; // kg CO2/kg of waste

    // Thresholds for alerts
    const transportThreshold = 200; // kg CO2/month
    const electricityThreshold = 300; // kg CO2/month
    const foodThreshold = 150; // kg CO2/month
    const wasteThreshold = 50; // kg CO2/month
    const totalThreshold = 700; // Total kg CO2/month

    // Calculate emissions
    const transportEmissions = distance * emissionFactorsTransport[transportType];
    const electricityEmissions = electricity * emissionFactorElectricity;
    const foodEmissions = meals * dietEmissionFactors[diet];
    const wasteEmissions = waste * emissionFactorWaste;

    // Total emissions
    const totalEmissions = transportEmissions + electricityEmissions + foodEmissions + wasteEmissions;

    // Display result
    document.getElementById("result").textContent = `Your total carbon footprint is ${totalEmissions.toFixed(2)} kg of CO2 per month.`;

    // Alert for high emissions
    if (transportEmissions > transportThreshold) {
        alert(`Your transportation emissions are high: ${transportEmissions.toFixed(2)} kg CO2.`);
    }
    if (electricityEmissions > electricityThreshold) {
        alert(`Your electricity usage is high: ${electricityEmissions.toFixed(2)} kg CO2.`);
    }
    if (foodEmissions > foodThreshold) {
        alert(`Your food-related emissions are high: ${foodEmissions.toFixed(2)} kg CO2.`);
    }
    if (wasteEmissions > wasteThreshold) {
        alert(`Your waste emissions are high: ${wasteEmissions.toFixed(2)} kg CO2.`);
    }
    if (totalEmissions > totalThreshold) {
        alert(`Your total carbon footprint is high: ${totalEmissions.toFixed(2)} kg CO2.`);
    }
}
