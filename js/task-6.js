function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
const amount = Number(input.value);

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    destroyBoxes(amount);
    createBoxes(amount);
    input.value = '';
  };
});

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    size += 10;
    boxes.appendChild(box);
  };
};

destroyBtn.addEventListener('click', () => {
  const amount = Number(input.value);
    destroyBoxes(amount);
    input.value = '';
});
function destroyBoxes(amount) {
 boxes.innerHTML = '';
}