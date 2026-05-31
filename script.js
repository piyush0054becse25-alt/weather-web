async function getWeather() {

   const city = document.getElementById("cityInput").value;

   const apiKey = "25532e9e86b704292506f798272bf4e3";

   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

   document.getElementById("weatherResult").innerHTML = "Loading...";

   const response = await fetch(url);

   const data = await response.json();

   console.log(data);

   if(data.cod != 200){
      alert(data.message);
      return;
   }

   document.getElementById("weatherResult").innerHTML = `
      <h2>${data.name}</h2>

      <p>🌡️ Temp: ${data.main.temp}°C</p>

      <p>☁️ Weather: ${data.weather[0].main}</p>

      <p>💧 Humidity: ${data.main.humidity}%</p>
   `;
}

document.getElementById("cityInput")
.addEventListener("keypress", function(event){

   if(event.key === "Enter"){
      getWeather();
   }

});