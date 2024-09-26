const weatherData = async (cityName="mumbai") => {

  let request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1ade3a73dfb801b49cb488a651b81821&units=metric`);
  let response = await request.json();
 console.log(response);
 
uimaker(response)
};

weatherData();

const uimaker=(data)=>{
  document.getElementById("weatherdata").innerHTML=`

  
        <div class="container">
            <div class="weather__header">
                <form class="weather__search" id="form">
                    <input type="text" placeholder="Search for a city..." class="weather__searchform" id="city">
                     <i class="fa-solid fa-magnifying-glass id="submit"></i> 
                </form> 
                <div class="weather__units">
                    <span class="weather_unit_celsius">&#176C</span>
                    <span class="weather_unit_farenheit">&#176F</span>
                </div>
            </div>
            <div class="weather__body">
                <h1 class="weather__city">${data.name},<span>  ${data.sys.country}</span></h1>
                <div class="weather__datetime">

                </div>
                <div class="weather__forecast">${data.weather[0].description}</div>
                <div class="weather__icon">
                <img src="img/02d@4x.png" alt="img">
                </div>
                <p class="weather__temperature">${Math.round(data.main.temp)} °C 
                </p>
                <div class="weather__minmax">
                    <p>Min: ${Math.round(data.main.temp_min)} °C </p>
                    <p>Max: ${Math.round(data.main.temp_max)} °C </p>
                </div>
            </div>
    
            <div class="weather__info">
                <div class="weather__card">
                    <i class="fa-solid fa-temperature-full"></i>
                    <div>
                        <p>Real Feel</p>
                        <p class="weather__realfeel">${Math.round(data.main.feels_like)}</p>
                    </div>
                </div>
                <div class="weather__card">
                    <i class="fa-solid fa-droplet"></i>
                    <div>
                        <p>Humidity</p>
                        <p class="weather__humidity">${Math.round(data.main.humidity)}</p>
                    </div>
                </div>
                <div class="weather__card">
                    <i class="fa-solid fa-wind"></i>
                    <div>
                        <p>Wind</p>
                        <p class="weather__wind">${Math.round(data.wind.speed)}</p>
                    </div>
                </div>
                <div class="weather__card">
                    <i class="fa-solid fa-gauge-high"></i>
                    <div>
                        <p>Pressure</p>
                        <p class="weather__pressure">${Math.round(data.main.pressure)}</p>
                    </div>
                </div>
            </div>
        </div>
 
        `

        const handleSubmit = (e) => {
          e.preventDefault();
          let cityName = document.getElementById("city").value
        
          weatherData(cityName)
        }
        document.getElementById("form").addEventListener("click", handleSubmit)
}


