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
//create reportAcudits array anf rateJoke()
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
btnJoke.addEventListener("click", getJoke);