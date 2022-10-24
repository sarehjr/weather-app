function showDate(event) {
  event.preventDefault();
  let now = new Date();
  console.log(now);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDate = days[now.getDay()];

  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();

  let Emrooz = document.querySelector("#today");
  Emrooz.innerHTML = `${currentDate} ${hours}:${minutes}`;

  let searchedCity = document.querySelector("#city-search");

  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = searchedCity.value;
}
function showWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}
function searchCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

let submit = document.querySelector("#search");
submit.addEventListener("submit", showDate);
