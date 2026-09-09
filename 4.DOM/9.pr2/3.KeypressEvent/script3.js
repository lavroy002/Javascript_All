// How to handle keypress event/keyboard event.
// Watch vidoes again later.

// Working with classes.

// Modal window project.
"use strict";

const modal = document.querySelector(".modal");
const overLay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal"); // It only selects the first element of same class.
const btnsOPenModal = document.querySelectorAll(".show-modal"); // It selects  all the element of same class.
console.log(btnsOPenModal);

for (let i = 0; i < btnsOPenModal.length; i++) {
  btnsOPenModal[i].addEventListener("click", function () {
    // adding event listener at once using for loop.
    console.log(btnsOPenModal[i].textContent); // for console click on the button..
    modal.classList.remove("hidden");
    overLay.classList.remove("hidden");
  });
}

// Always try to use  function in repetitive mode.
const closeModal = function () {
  modal.classList.add("hidden");
  overLay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal); // Here closeModal is only called when clicke event is done.
overLay.addEventListener("click", closeModal);


// The main topic covered .Watch this vidoes again later.
document.addEventListener("keydown", function (x) { // This function will executed for any keypress happens.
  // Event object is created when event happens. x is event object.
  console.log("..$ A key was pressed");
  console.log(x); // where x is event object.
  console.log(x.key);
  // To know which key is pressed.
  // property name to read property from object that is key in this case.

  if(x.key==='Escape' && !modal.classList.contains('hidden')){ // Close the modal if it doesn't contain hidden class than close the modal.
    console.log('esc is pressed');
   
    closeModal() ;
  }
});
//Note before using nested if , it can be either can by solved by using and operator and ternary operator .
 