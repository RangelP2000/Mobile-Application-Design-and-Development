document.querySelector("#calculateButton").addEventListener("click", calculateCarbonFootprint);
document.querySelector("#clearButton").addEventListener("click", clearResult);
document.querySelector("#getTips").addEventListener("click", getTips);
document.querySelector("#getNews").addEventListener("click", getNews);

function getNews() {
  location.replace("news.html")
}

function getTips() {
  location.replace("carbon.tips.html");
}

function clearResult() {
    transportMode.value = 0;
    energyConsumption.value = null;
    dietCarbonEmission.value = null;
    document.querySelector("#carbonFootprintResult").textContent = "0";
    document.querySelector("#carbonFootprintResultCard").style.display = "none";    
}

function calculateCarbonFootprint() {
  const transportMode = document.querySelector("#transportMode").value;
  const energyConsumption = parseFloat(document.querySelector("#energyConsumption").value);
  const dietCarbonEmission = parseFloat(document.querySelector("#dietCarbonEmission").value);

  let transportFactor;
  switch (transportMode) {
    case 'car':
      transportFactor = 2.5; // Carbon emissions factor for cars (in kg CO2e/km)
      break;
    case 'bike':
      transportFactor = 0; // Bikes have minimal carbon emissions
      break;
    case 'public_transit':
      transportFactor = 0.1; // Carbon emissions factor for public transit (in kg CO2e/km)
      break;
  }

  const transportCarbon = energyConsumption * transportFactor;
  const dietCarbon = dietCarbonEmission * 52; 
  const carbonFootprintResult = transportCarbon + dietCarbon;

  document.querySelector("#carbonFootprintResult").textContent = carbonFootprintResult.toFixed(2);
  document.querySelector("#carbonFootprintResultCard").style.display = "block";
}