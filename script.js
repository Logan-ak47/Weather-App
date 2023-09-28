const API_KEY = "1f385a199d02673ea85735c0e4b25d73";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const weatherIcon = document.querySelector(".weather-icon");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    let weatherUrl = API_URL + city + `&appid=${API_KEY}`;

    const response = await fetch(weatherUrl);
    if (response.status === 200) {
        var data = await response.json();
        console.log(data);

        document.querySelector(".city-name").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        // if(data.weather[0].main=="Clouds"){
        //     weatherIcon.src="images/clouds.png"
        // }
        // else if(data.weather[0].main=="Clear"){
        //     weatherIcon.src="images/clear.png"
        // }
        // else if(data.weather[0].main=="Rain"){
        //     weatherIcon.src="images/rain.png"
        // }
        // else if(data.weather[0].main=="Drizzle"){
        //     weatherIcon.src="images/drizzle.png"
        // }
        // else if(data.weather[0].main=="Mist"){
        //     weatherIcon.src="images/mist.png"
        // }

        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src="images/clouds.png"
                break;
            case "Clear":
                weatherIcon.src="images/clear.png"
                break;
            case "Rain":
                weatherIcon.src="images/rain.png"
                break;
            case "Drizzle":
                weatherIcon.src="images/drizzle.png"
                break;
            case "Mist":
                weatherIcon.src="images/mist.png"
                break;


            default:
                break;
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    } else if (response.status === 401) {
        document.querySelector(".error").innerHTML = "Server Down";
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }

}

searchBtn.addEventListener("click", () => {

    checkWeather(searchBox.value);

})
