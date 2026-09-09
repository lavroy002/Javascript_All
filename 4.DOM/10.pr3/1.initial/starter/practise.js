'use strict';
//Selecting Elements
const player0El = document.querySelector
const score0El  = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');



//starting conditions
score0El.textContent=0 ;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores =[0,0];
let currentScore = 0;
let activePlayer = 0;

//Rolling dice functionality
btnRoll.addEventListener('click',function(){
    const random =Math.trunc( Math.random()*6 ) + 1;
    console.log(random);
    diceEl.classList.remove('hidden');

    diceEl.src = `dice-${random}.png`;

    if(random !==1){
        //add dice to current score 
        currentScore += random;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else{
        //Switch to next player 
        currentScore = 0;
        activePlayer = activePlayer == 0 ? 1 : 0 ;

    }

})
