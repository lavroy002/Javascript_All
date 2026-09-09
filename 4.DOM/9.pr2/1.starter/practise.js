const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOPenModal = document.querySelectorAll('.show-modal');

console.log(modal);

for (let i = 0; i < btnsOPenModal.length; i++) {
  btnsOPenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
modal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
