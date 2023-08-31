const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed'); 


 async function checkweather(city){
    const api_key="ce5c749f52fb4a03d0516f60c7cb83c3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response =>
        response.json());

       temperature.innerHTML= `${Math.round
    (weather_data.main.temp- 273.15)} °C`;

    description.innerHTML = `${weather_data.weather[0].description}`;
    
    humidity.innerHTML= `${weather_data.main.humidity}%`;

    wind_speed.innerHTML= `${weather_data.wind.speed}Km/H`;

switch(weather_data.weather[0].main){
case 'Clouds':
    weather_img.src = "img/weather-icon,png.webp"
break;



    case 'Clear':
weather_img.src = "img/clear.png";
break;

case 'Rain':
weather_img.src = "img/rain.png";
break;

case 'Mist':
weather_img.src = "img/mist.png";
break;

case 'Snow':
weather_img.src="/img/snow.png";
break;
}

    console.log(weather_data);
}


searchBtn.addEventListener ('click', ()=>{
    checkweather(inputBox.value);
});