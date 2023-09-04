const jokeBtn = document.getElementById("jokeBtn");
const jokeText = document.getElementById("jokeText");

jokeBtn.addEventListener("click", fetchJoke);

function fetchJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      // console.log(response);
      return response.json();
      // return response;
    })
    .then((data) => {
      console.log(data);
      // console.log(data, data.value);
      jokeText.textContent = data.value;
    })
    .catch((error) => {
      jokeText.textContent = "Error fetching joke.";
      console.error(error);
    });
}

const factBtun = document.getElementById("factBtun");
const factTxt = document.getElementById("factTxt");

factBtun.addEventListener("click", fetchFacto);

async function fetchFacto() {
  let response = await fetch("http://numbersapi.com/random");
  let data = await response.text();
  factTxt.textContent = data;
}

/*
function fetchFacto() {
  fetch("http://numbersapi.com/random")
    .then((response) => {
      // console.log(response);
      return response.text();
      // return response;
    })
    .then((data) => {
      // console.log(data);
      factTxt.textContent = data;
    })
    .catch((error) => {
      factTxt.textContent = "Error fetching fact.";
      console.error(error);
    });
}
*/