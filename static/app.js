window.addEventListener('load', main);


function main() {
  function getAPIData() {
    var http = new XMLHttpRequest();
    
    http.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
          update(JSON.parse(this.responseText));
        }
    }
    
    http.open("GET", "/api", true);
    http.send();
  }
  
  
  function update(apiData) {
    var tempC = document.getElementById("tempC");
    var tempF = document.getElementById("tempF");
    var pressureMb = document.getElementById("pressureMb");
    var pressurePsi = document.getElementById("pressurePsi");
    var pressureHpa = document.getElementById("pressureHpa");
    var pressureP = document.getElementById("pressureP");
    var humidity = document.getElementById("humidity");
    
    tempC.innerHTML = parseFloat(apiData.temperature.C).toFixed(2) + "°C";
    tempF.innerHTML = parseFloat(apiData.temperature.F).toFixed(2) + "°F";
    
    pressureMb.innerHTML = parseFloat(apiData.pressure.mb).toFixed(2) + " mb";
    pressurePsi.innerHTML = parseFloat(apiData.pressure.psi).toFixed(2) + " psi";
    pressureHpa.innerHTML = parseFloat(apiData.pressure.hPa).toFixed(2) + " hPa";
    pressureP.innerHTML = parseFloat(apiData.pressure.P).toFixed(2) + " P";
      
    humidity.innerHTML = parseFloat(apiData.humidity).toFixed(2) + " %";
  }
  
  
  function app() {
    window.setInterval(function() {
      getAPIData();
    }, 5000);
  }
  
  app();
}
