let now = new Date();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let dayToday = document.querySelector("#today");
dayToday.innerHTML = day + " " + hours + ":" + minutes;

function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-city");
  let change = document.querySelector(".city");
  change.innerHTML = cityInput.value;

  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let changeTemp = document.querySelector("#temp");
    changeTemp.innerHTML = temperature;
  }
  let city = cityInput.value;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

let cityForm = document.querySelector(".weather-search-form");
cityForm.addEventListener("submit", showCity);
