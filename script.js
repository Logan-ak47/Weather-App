const API_KEY="1f385a199d02673ea85735c0e4b25d73";
const API_URL="https://api.openweathermap.org/data/2.5/weather&units=metric&q=mumbai";

async function checkWeather(){
    console.log(API_URL+ `&appid=${API_KEY}`);
     const response= await fetch(API_URL+ `&appid=${API_KEY}`);
     var data=await response.json;
     console.log(data);
}

checkWeather();