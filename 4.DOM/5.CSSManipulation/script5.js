// Manipultaion css using Javascript.
//   Handling Click Events
const secretNumber = Math.trunc(Math.random()*20 + 1);
let score  = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess,guess);

    //When there is no input
    if(!guess ){
      document.querySelector('.message').textContent = 'No Number Place a valid number';

      //When player wins
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = '🥇correct Number';
        // Manipulating css using javascript.
        document.querySelector('body').style.backgroundColor = 'green'; 
        document.querySelector('.number').style.width = '30rem';
        //Note: while adding property like width , background color it should be in  string i.e ' ';
        // And the style added using querySelector is set as inlineStyle.


        // When guess is too high
    }else if(guess > secretNumber){
        document.querySelector('.message').textContent = 'Too high📈';
        score --;
        document.querySelector('.score').textContent = score;        

    }else if(guess < secretNumber){
        document.querySelector('.message').textContent = 'Too Low📉';
        score--;
        document.querySelector('.score').textContent = score;  
    }
}) 

