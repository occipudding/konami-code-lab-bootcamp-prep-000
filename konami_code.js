const pressedKeys = [];

const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {

document.body.addEventListener('keydown', (e) => {

pressedKeys.push(e.key);
pressedKeys.splice(-codes.length - 1, pressedKeys.length - codes.length);
if(pressedKeys.join('').includes(codes)) {
  alert('You did it!');
}

});

return pressedKeys;

}
