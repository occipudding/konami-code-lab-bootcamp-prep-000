let pressedKeys = [];

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
  
  /*go in the document and give `input` access to <body>*/
  const input = document.querySelector('body');
  
  /*listen to `input` (document.body) for keyboard press & do something when that happens*/
  input.addEventListener('keydown', (event) => {
    
    /*adds key pressed to pressedKeys array*/
    pressedKeys.push(event.key);
    
    /*keeps only the last n keys added to pressedKeys array, where n is the length of codes array*/
    /*`-codes.length - 1` starts splice at end of pressedKeys array*/
    /*`pressedKeys.length - codes.length` cuts values from array starting n indexes from end of */
    /*array, where n is length of `codes` array*/
    pressedKeys.splice(-codes.length - 1, pressedKeys.length - codes.length);
  });
  
    /*send alert when pressedKeys array holds same values as codes array*/
    if(pressedKeys == codes) {
    alert('Yay');
    }

return pressedKeys;

}
