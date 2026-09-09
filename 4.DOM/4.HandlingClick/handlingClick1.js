// Event listeners:  Handling Click Events
// An event listener is a function in JavaScript that waits for a specific event (like a click, keypress, or mouse movement) to happen on an element, and then runs code in response.
const secretNumber = Math.trunc(Math.random()*20 + 1);
let score  = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click',function(){
    // document.querySelector('.check') returns element of check class and we add eventlistener to those class or element, to happen event.
    const guess = Number(document.querySelector('.guess').value);
    // Note :  If we get any input from input field ,  it is always in the form of string  so we are changing to number through number function.
    console.log(typeof guess,guess);

    if(!guess ){
      document.querySelector('.message').textContent = 'No Number Place a valid number';
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = '🥇correct Number';
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
// Here we not implemented the game logic when  score is less than 0.

// Note : The functions in addEvent listener is  called  when any event happens on that element.This is same as function expression.
// To select any text which is of same i.e all secret number at once double click in that text it will select of same type  , i.e any text.

