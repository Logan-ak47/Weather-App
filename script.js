const API_KEY="1f385a199d02673ea85735c0e4b25d73";
//const API_KEY =    "63ba223b96b44e6a846150706232709";
const API_URL="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=mumbai";
//https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=1f385a199d02673ea85735c0e4b25d73
const API_URL_2="https://api.weatherapi.com/v1/current.json&q=London&aqi=no"
async function checkWeather(){
    let testURL=API_URL+`&appid=${API_KEY}`;
     console.log(testURL);
     const response= await fetch(testURL)
     var data=await response.json();
     console.log(data);
}

checkWeather();