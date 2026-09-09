// Implementing game logic when score is less than 0.
const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector(".message").textContent =
      "No Number Place a valid number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🥇correct Number";
  } else if (guess > secretNumber) {
    // Implementing logic when guess is less than zero.
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else{
        document.querySelector(".message").textContent = "you lose the game";
    }
  } else if (guess < secretNumber) {
    // implementing game logic when score is less than zero.
     if (score > 1) {
      document.querySelector(".message").textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else{
        document.querySelector(".message").textContent = "you lose the game";
    }

  
  }
});
// There are  a lot of duplicacy in this code so we later fix this , it mean code is not in good  readable form.