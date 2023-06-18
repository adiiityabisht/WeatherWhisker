
      const apiKey = "aba6ff9d6de967d5eac6fd79114693cc";
      const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

      async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "KM/H";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.gif";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.gif";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.gif";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.gif";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.gif";
        }
        document.querySelector(".weather").style.display = "block";
      }

      searchBtn.addEventListener("click", ()=>{checkWeather(searchBox.value)})    
    