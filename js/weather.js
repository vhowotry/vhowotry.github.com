const API_KEY = "86f342fb83ec232c9b59185efb6cb7f0";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} \n ${data.main.temp}°C\n`;
      city.innerText = data.name;
    });
}
function onGeoError() {}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
