
// fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=1', options)
// 	.then(response => response.json())
// 	// .then(response => console.log(response))
// 	.then(data => console.log(data))
// 	.catch(err => console.error(err));

// const city = document.getElementById('searchField').value;

const userCountry = document.getElementById('countryDiv')
const userCity = document.getElementById('cityDiv')
const userTime = document.getElementById('localTime')
const weatherIcon = document.getElementById('img')
const weatherText = document.getElementsByClassName('weatherImgDiv')
const currentTemp = document.getElementById('temp')
const wind = document.getElementById('windInfo')


const getWeather = (city) => {
    const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q='

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': config.API_KEY,
    //         'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    //     }
    // };

    return fetch(`${url}${city}`, options)
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

// searchCity()

const displayWeatherData = (weatherData) => {
    console.log(weatherData, 'Here is some data')

    userCountry.innerText = weatherData.location.country
    userCity.innerText = weatherData.location.name
    userTime.innerText = weatherData.location.localtime
    weatherIcon.src = weatherData.current.condition.icon
    weatherText.innerHTML = `<p>${weatherData.current.condition.text}</p>`
    currentTemp.innerText = weatherData.current.temp_c
    wind.innerText = `The Wind speed is: ${weatherData.current.wind_mph}`
}


