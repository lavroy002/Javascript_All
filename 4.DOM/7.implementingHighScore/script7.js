//Implementing HighScore
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
highScore = 0;

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.message').textContent = "start guessing...";
    document.querySelector('body').style.background = 'black';
    document.querySelector('.guess').value = '';
    //The empty string mean absence of value.
   

})


document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector(".message").textContent =
      "No Number Place a valid number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🥇correct Number";
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    // Implementing highScore
    if(highScore<score){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;

    }
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
