const API_KEY = `8b9a876b5c4ad9f787574c9b4d599e07`
const searchBtn =  () =>{
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const setInnerText = (name, value) => {
    document.getElementById(name).innerText = value
}

const displayTemperature = temperature => {
    setInnerText('cityName' , temperature.name)
    console.log(temperature);
}