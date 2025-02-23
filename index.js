const ApiKey = "ac9f3ad9323d58a8b73ae1ee72792e35"
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?q="
let InputValue = document.querySelector("#input")
let SearchBtn = document.querySelector(".fa-solid")
let Main_img = document.querySelector("#img-icon")
const Display_Data = document.querySelector(".Data-screen")
async function weatherData(city) {
    let response = await fetch(ApiUrl + city + `&appid=${ApiKey}`)

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        Display_Data.style.display = "none"
    }
    else {
        const data = await response.json()
        console.log(data)
        
        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 272) + "°C"
        document.querySelector(".wind-value").innerHTML = data.wind.speed + "Km/h"
        document.querySelector(".humidity-value").innerHTML = data.main.humidity + "%"
        
        if (data.weather[0].main == "Clear") {
            Main_img.src = "clear.png"
        }
        else if (data.weather[0].main == "Clouds") {
            Main_img.src = "clouds.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            Main_img.src = "drizzle.png"
        }
        else if (data.weather[0].main == "Rain") {
            Main_img.src = "rain.png"
        }
        else if (data.weather[0].main == "Mist") {
            Main_img.src = "mist.png"
        }
        else if (data.weather[0].main == "Snow") {
            Main_img.src = "snow.png"
        }
        
        Display_Data.style.display = "block"
        document.querySelector(".error").style.display = "none"
    }
}

SearchBtn.addEventListener("click", () => {
    weatherData(InputValue.value)
})
