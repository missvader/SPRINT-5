//access DOM elements 
const btnJoke = document.getElementById("btn-joke");
const randomJoke = document.getElementById("text-joke");
//Fetch dadjoke API
let resultJoke;
async function getJoke(){
  const result = await fetch("https://icanhazdadjoke.com/", {
    headers: {'Accept': 'application/json'}
  })
  const json = await result.json();
  resultJoke = json.joke;
  console.log(resultJoke);
}
btnJoke.addEventListener("click", getJoke);