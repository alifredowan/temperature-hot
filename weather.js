const API_KEY = `8b9a876b5c4ad9f787574c9b4d599e07`
const searchBtn =  () =>{
    const searchResult = document.getElementById('searchCity').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={searchResult}&appid={API_KEY}`
    console.log(url);
//     fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data))
}