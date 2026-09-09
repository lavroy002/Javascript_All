let score = 20;
let highScore =0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);


  let displayMessage = function(message){
    document.querySelector('.message').textContent = message;
  }
document.querySelector(".check").addEventListener("click", function () {
  guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("please enter a valid number");
  } else if (guess === secretNumber) {
    displayMessage("you have won a game");
    document.querySelector("body").style.backgroundColor = "green";
    if(highScore < score){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }

  } else if (guess!=secretNumber) {
    if (score > 1) {
        displayMessage(guess<secretNumber ? "low guess": "highguess");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("you have loose a game");
    }
  }
});

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.guess').value ='';
    document.querySelector('.number').textContent = " ? ";
    displayMessage('start guessing...') ;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = "black";



})
