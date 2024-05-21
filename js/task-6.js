function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
    input.value = '';
  };
});

function createBoxes(amount) {
  let size = 30;
  let markup = '';
  for (let i = 0; i < amount; i++) {
    markup += `<div style ="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}";></div>`;
    size += 10;
  };
boxes.innerHTML = markup;
};

destroyBtn.addEventListener('click', () => {
    destroyBoxes();
    input.value = '';
});
function destroyBoxes() {
 boxes.innerHTML = '';
}