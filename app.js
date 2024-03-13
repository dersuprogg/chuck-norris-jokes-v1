"use strict";
const jokeEl = document.querySelector(".joke");
const getJokeBtn = document.querySelector(".btn");
function getJoke() {
  const url = "https://api.chucknorris.io/jokes/random";
  const req = new XMLHttpRequest();
  req.open("GET", url);
  req.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      const joke = data.value;
      jokeEl.textContent = joke;
    }
  };

  req.send();
}
getJoke();
getJokeBtn.addEventListener("click", getJoke);
