const apiKey = "497225f89280d21592efd186fd66ad4b";
const Country = "br"

const cityInput = document.querySelector("#city-input")
const buttonSearch = document.querySelector("#search")



const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement  = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const umidityElement = document.querySelector("#umidity span")
const windElement = document.querySelector("#wind span")
const country = document.querySelector("#country")
const weatherContainer =document.querySelector(".weather-data")

const getWeatherData = async(city)=>{
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
    const res = await fetch(apiWeatherUrl)
    const data= await res.json()

    return data
}

const showWeatherData = async (city)=>{
    const data = await getWeatherData(city)
    cityElement.innerHTML = data.name
    tempElement.innerHTML= parseInt(data.main.temp)
    descElement.innerHTML = data.weather[0].description
    weatherIconElement.setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    umidityElement.innerHTML= data.main.humidity+"%"
    windElement.innerHTML = data.wind.speed+"km/h"
    country.innerHTML=`- ${data.sys.country }`
    weatherContainer.classList.remove("hide")

}

buttonSearch.addEventListener("click",(e)=>{
    e.preventDefault()
    const city = cityInput.value
    showWeatherData(city)
    
})

cityInput.addEventListener("keyup",(e)=>{
    if(e.code==="Enter"){
        const city =e.target.value
        showWeatherData(city)
    }
})