//access DOM elements 
const btnJoke = document.getElementById("btn-joke");
const textJoke = document.getElementById("text-joke");
const icon = document.getElementById("icon");
const temperature = document.getElementById("temperature");
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
      joke : textJoke.textContent,
      score : userScore,
      date : new Date().toISOString()
    }
  reportAcudits.push(randomJoke);
  console.log(reportAcudits);
}
//fetch ChuckNorrisJokes API
let resultChuck;
async function getChuckJoke(){
  const result = await fetch("https://api.chucknorris.io/jokes/random");
  const json = await result.json();
  resultChuck = json.value;
  //console.log(resultJoke);
  textJoke.textContent = resultChuck;
}
//random number to fetch between APIS
const fetchJoke = ()=> {
  //get random number 1 to 10 and fetch aleatory API depending number
  let randomNumber = Math.round(Math.random()*10);
  //console.log(randomNumber);
  let randomJoke = (randomNumber > 5)? getChuckJoke() : getJoke();
}
//fetch OpenWeatherMap API
//let resultWeather;
async function getWeather(){
  const result = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=bee839bdd418af83edc24e9ea7b0e924&lang=ca&units=metric");
  const json = await result.json();
  let iconWeather = json.weather[0].icon;
  let temp = Math.floor(json.main.temp);
  console.log(iconWeather)
  console.log(temp);
  icon.src= `http://openweathermap.org/img/w/${iconWeather}.png`;
  temperature.innerHTML = temp + "° C"
}
window.addEventListener("load", getWeather);
btnJoke.addEventListener("click", fetchJoke);