// fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=1', options)

const cityCountry = document.getElementById('cityCountry')
const windInfo = document.getElementById('windInfoDiv')
const userCountry = document.getElementById('countryDiv')
const userCity = document.getElementById('cityDiv')
const userTime = document.getElementById('localTime')
const weatherIcon = document.getElementById('img')
const weatherText = document.getElementsByClassName('weatherImgDiv')
const currentTemp = document.getElementById('temp')
const wind = document.getElementById('windInfo')
const forecastDiv = document.getElementById('forecastDiv')
const forecastIcon1 = document.getElementById('conditionIcon1')
const forecastText1 = document.getElementById('conditionText1')
const forecastIcon2 = document.getElementById('conditionIcon2')
const forecastText2 = document.getElementById('conditionText2')
const forecastDetails1 = document.getElementById('forecastList1')
const forecastDetails2 = document.getElementById('forecastList2')


const getWeather = (city) => {
    const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q='

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': config.API_KEY,
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    return fetch(`${url}${city}&days=2`, options)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.error(err));
}


const searchCity = async () => {
    const city = document.getElementById('searchField').value;
    console.log(city)

    const data = await getWeather(city)

    displayWeatherData(data)
}

const displayWeatherData = (weatherData) => {
    console.log(weatherData, 'Here is some data')

    cityCountry.style.display = "flex"
    windInfo.style.display = "block"
    forecastDiv.style.display = "block"
    userCountry.innerText = weatherData.location.country
    userCity.innerText = weatherData.location.name
    userTime.innerText = weatherData.location.localtime
    weatherIcon.src = weatherData.current.condition.icon
    weatherText.innerHTML = `<p>${weatherData.current.condition.text}</p>`
    currentTemp.innerText = weatherData.current.temp_c
    wind.innerText = `The Wind speed is: ${weatherData.current.wind_mph}`
    forecastIcon1.src = weatherData.forecast.forecastday[0].day.condition.icon
    forecastText1.innerText = weatherData.forecast.forecastday[0].day.condition.text
    forecastDetails1.innerHTML = `
        <li>Date: ${weatherData.forecast.forecastday[0].date}</li><br>
        <li>Sunrise: ${weatherData.forecast.forecastday[0].astro.sunrise}</li><br>
        <li>Sunset: ${weatherData.forecast.forecastday[0].astro.sunset}</li><br>
        <li>Moon phase: ${weatherData.forecast.forecastday[0].astro.moon_phase}</li><br>
        <li>Humidity: ${weatherData.forecast.forecastday[0].day.avghumidity}</li><br>
        <li>Average temp: ${weatherData.forecast.forecastday[0].day.avgtemp_c}</li><br>
        <li>Max temp: ${weatherData.forecast.forecastday[0].day.maxtemp_c}</li><br>
        <li>Min temp: ${weatherData.forecast.forecastday[0].day.mintemp_c}</li><br>`

    forecastIcon2.src = weatherData.forecast.forecastday[1].day.condition.icon
    forecastText2.innerText = weatherData.forecast.forecastday[1].day.condition.text
    forecastDetails2.innerHTML = `
        <li>Date: ${weatherData.forecast.forecastday[1].date}</li><br>
        <li>Sunrise: ${weatherData.forecast.forecastday[1].astro.sunrise}</li><br>
        <li>Sunset: ${weatherData.forecast.forecastday[1].astro.sunset}</li><br>
        <li>Moon phase: ${weatherData.forecast.forecastday[1].astro.moon_phase}</li><br>
        <li>Humidity: ${weatherData.forecast.forecastday[1].day.avghumidity}</li><br>
        <li>Average temp: ${weatherData.forecast.forecastday[1].day.avgtemp_c}</li><br>
        <li>Max temp: ${weatherData.forecast.forecastday[1].day.maxtemp_c}</li><br>
        <li>Min temp: ${weatherData.forecast.forecastday[1].day.mintemp_c}</li><br>`
}


