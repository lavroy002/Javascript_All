// Modal window project.
'use strict';

const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.show-modal'); // It only selects the first element of same class.
const btnsOPenModal = document.querySelectorAll('.show-modal'); // It selects  all the element of same class by making node of list.
console.log(btnsOPenModal);

// understanding the nodelist selected by querySelectorAll
for (let i = 0; i < btnsOPenModal.length; i++) {
  console.log(btnsOPenModal[i].textContent);
  // It mean printing the nodelist textContent.
}
