// Working with classes. Index.html file from 9.pr2 > 1.starter > index.html
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
    // Note dot  is not used when selecting class , it is only used in query selector so don't use dot here 
    // It mean remove the hidden class.
    overLay.classList.remove("hidden");
  });
}

// Always try to use  function in repetitive mode.
const closeModal = function () {
  modal.classList.add("hidden"); // Here don't add dot for classes and we can remove couple of class using comma.
  overLay.classList.add("hidden");
  // overlay has classlist property and classlist property itself  has couple of methods in this case i.e add /remove etc. 
};

btnCloseModal.addEventListener("click", closeModal); // Here closeModal is only called when clicke event is done.
// when we add parenthesis to this closeModal than it immdiately runs , but we want to execute that when click event occurs so don't add parenthesis.
overLay.addEventListener("click", closeModal);
