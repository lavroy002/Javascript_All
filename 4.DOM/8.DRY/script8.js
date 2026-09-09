//Refactoring Code using  DRY  => Don't repeat yourself principle.
// we have make functions for the repeated code .
// watch this vidoes once again later. Thank you for being here.
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

//Implementing Dry principle.
// Before , on selecting  document.querySelector(".message") you see two or three got selected , which mean there is duplicacay in this code it can be solved by using function 
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  displayMessage("start guessing");
  document.querySelector(".score").textContent = "20";
  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "black";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess, guess);

  //When there is no input
  if (!guess) {
    displayMessage("Please place a valid number");

    //When player wins
  } else if (guess === secretNumber && score > 1) {
    //Implementing DRY principle.
    displayMessage("You have won the game!");
    // Manipulating css using javascript.
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }

    // When guess is too high or too low.
    //Implementing DRY principle => using ternary and many others. 
  } else if (guess !== secretNumber) {
    if(score>1){
      // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High' : 'Too Low';
      //Instead of upper one using lower one using DRY principle
      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
      score --;
      document.querySelector(".score").textContent = score;

    }
    else{
      //DRY principle .
      displayMessage("you have lost the game");
    }
  }
});
      
  

// on selecting  document.querySelector(".message") you see two or three got selected , which mean there is duplicacay in this code it can be solved by using function.
//  in this way you make function for all the repetitive task .