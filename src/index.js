let now = new Date();
let h5 = document.querySelector("h5");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let day = days[now.getDay()];
h5.innerHTML = `${day}, ${date}th. ${hours}:${minutes}`;
function searchCity(event) {
  event.preventDefault();
  let searchTextInput = document.querySelector("#text-input");
  let h1 = document.querySelector("h1");
  if (searchTextInput.value) {
    h1.innerHTML = `${searchTextInput.value}`;
  } else {
    h1.innerHTML = null;
    alert("Please enter a city..");
  }
  let apiKey = "1c72bf446097ca5cb1d7b9793383b20f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTextInput.value}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(retrieveWeather);
}
function retrieveWeather(response) {
  console.log(response);
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${Math.round(response.data.main.temp)}°C`;
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#high").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#low").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#pressure").innerHTML = response.data.main.pressure;
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
  document.querySelector("#visibility").innerHTML = response.data.visibility;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

