const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  const input = document.querySelector("#city-input");
  const cityInput = input.value;
  
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${ cityInput }&appid=4018b500122ee53a2b2b0ccc505a5ae4&units=metric`;
  fetch(url).then(response => response.json()).then(data => {
    console.log(data);
    console.log(data.list[0]);
    
    //current
    document.querySelector("#current-temp").textContent = data.list[2].main.temp.toFixed(0)
    document.querySelector("#current-weather-icon").src = `https://openweathermap.org/img/wn/${ data.list[2].weather[0].icon }@4x.png`
    var dateCurrent = data.list[2].dt
    document.querySelector("#current-date").textContent = moment.unix(dateCurrent).format("ddd, D MMM YY")
    document.querySelector("#current-weather-main").textContent = data.list[2].weather[0].main
    document.querySelector("#current-humidity").textContent = "Humidity - " + data.list[2].main.humidity + "%"
    document.querySelector("#current-city").textContent = data.city.name.toUpperCase()
    document.querySelector("#current-country").textContent = data.city.country
    document.querySelector("#pressure-hpa").textContent = data.list[2].main.pressure + " hPa"
    document.querySelector("#wind-speed").textContent = data.list[2].wind.speed
    document.querySelector("#wind-deg").textContent = data.list[2].wind.deg + "°"
    document.querySelector("#humidity-percent").textContent = data.list[2].main.humidity + "%"
    document.querySelector("#visibility-km").textContent = data.list[2].visibility * 0.001
    //sunrise sunset
    var sunriseUnix = data.city.sunrise;
    var sunsetUnix = data.city.sunset;
    document.querySelector("#sunrise-time").textContent = moment.unix(sunriseUnix).format("HH:mm");
    document.querySelector("#sunset-time").textContent = moment.unix(sunsetUnix).format("HH:mm");

    //day-2
    var dateDay2 = data.list[8].dt
    document.querySelector("#day-2").textContent = moment.unix(dateDay2).format("ddd")
    document.querySelector("#day-2-icon").src = `https://openweathermap.org/img/wn/${ data.list[8].weather[0].icon }.png`
    document.querySelector("#day-2-temp").textContent = data.list[8].main.temp.toFixed(0) + "°"
    document.querySelector("#day-2-feels").textContent = data.list[8].main.feels_like.toFixed(0) + "°"
    
    //day-3
    var dateDay3 = data.list[16].dt
    document.querySelector("#day-3").textContent = moment.unix(dateDay3).format("ddd")
    document.querySelector("#day-3-icon").src = `https://openweathermap.org/img/wn/${ data.list[16].weather[0].icon }.png`
    document.querySelector("#day-3-temp").textContent = data.list[16].main.temp.toFixed(0) + "°"
    document.querySelector("#day-3-feels").textContent = data.list[16].main.feels_like.toFixed(0) + "°"
    
    //day-4
    var dateDay4 = data.list[24].dt
    document.querySelector("#day-4").textContent = moment.unix(dateDay4).format("ddd")
    document.querySelector("#day-4-icon").src = `https://openweathermap.org/img/wn/${ data.list[24].weather[0].icon }.png`
    document.querySelector("#day-4-temp").textContent = data.list[24].main.temp.toFixed(0) + "°"
    document.querySelector("#day-4-feels").textContent = data.list[24].main.feels_like.toFixed(0) + "°"
    
    //day-5
    var dateDay5 = data.list[32].dt
    document.querySelector("#day-5").textContent = moment.unix(dateDay5).format("ddd")
    document.querySelector("#day-5-icon").src = `https://openweathermap.org/img/wn/${ data.list[32].weather[0].icon }.png`
    document.querySelector("#day-5-temp").textContent = data.list[32].main.temp.toFixed(0) + "°"
    document.querySelector("#day-5-feels").textContent = data.list[32].main.feels_like.toFixed(0) + "°"
    
  })
})

/*async function forecast() {
  var url = 'https://api.openweathermap.org/data/2.5/forecast?q=jakarta&appid=4018b500122ee53a2b2b0ccc505a5ae4&units=metric';
  const response = await fetch(url);
  const data = await response.json(); 
  console.log(data);
  console.log(data.city.sunrise);
  
  document.getElementById("myImg").src = "";
}

src="http://openweathermap.org/img/wn/01d.png"

forecast();*/

const date = moment.unix(1629957600).format("ddd");
console.log(date);

