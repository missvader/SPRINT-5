//access DOM elements 
const btnJoke = document.getElementById("btn-joke");
const textJoke = document.getElementById("text-joke");
//Fetch dadjoke API
let resultJoke;
async function getJoke(){
  const result = await fetch("https://icanhazdadjoke.com/", {
    headers: {'Accept': 'application/json'}
  })
  const json = await result.json();
  resultJoke = json.joke;
  //console.log(resultJoke);
  textJoke.textContent = resultJoke;
}
//create reportAcudits array and rateJoke()
let reportAcudits = [];
function rateJoke(userScore){
  let randomJoke = {
    joke : resultJoke,
    score : userScore,
    date : new Date().toISOString()
  }
  reportAcudits.push(randomJoke);
  console.log(reportAcudits);
}
//fetch OpenWeatherMap API
let resultWeather;
async function getWeather(){
  const result = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=bee839bdd418af83edc24e9ea7b0e924&lang=ca&units=metric");
  const json = await result.json();
  resultWeather = json.weather[0].description;
  let temp = Math.floor(json.main.temp);
  let city = json.name;
  console.log(resultWeather)
  console.log(temp);
  console.log(city);
}
getWeather();
btnJoke.addEventListener("click", getJoke);