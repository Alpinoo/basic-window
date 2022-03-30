'use strict';

// - Create variables
//     - buttons
//         - Open
//         - Close
//     - overlay
// - Create open/close functions
//     - Open:  remove “hidden” from modal&overlay
//     - Close: add “hidden”from modal&overlay
// - Pressing button will open paragraph
//     - Seperate every button
//     - Shade overlay
// - Closing
//     - press “x” button
//     - press outside of overlay
//     - press escape

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //?querySelectorAll selects everything in it
const btnCloseModal = document.querySelector('.close-modal');

const openModal = function () {
  //?Removes "hidden" to unhide
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  //? adds "hidden" to hide (check hidden class)
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  //?for every element of btnsOpenModal, openModal when clicked
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  //?keydown is when key has pressed down
  if (e.key === 'Escape' && !modal.contains('hidden')) {
    //?Only execute when it's not hidden
    closeModal(); //? Here, we called the function immediately (by putting paranthesis) because here, we need function to execute instead of giving an output.
  }
});
