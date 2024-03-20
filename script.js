"use strict";

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //When the user has no input
  if (!guess) {
    displayMessage("No Number!!🌹🌹🤞✌✌🤞🤞");
  }
  //when the user wins
  else if (guess == secretNum) {
    console.log((document.querySelector(".number").textContent = secretNum));
    displayMessage("Correct Number!!🎉🎉");

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "35rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  //When the guess is not correct
  else if (guess !== secretNum) {
    if (score > 1) {
      displayMessage(guess > secretNum ? "Too high😢" : "Too low😢");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      displayMessage("Game oVer😭");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";

  displayMessage("Start guessing...");
  Number((document.querySelector(".guess").value = ""));
});
