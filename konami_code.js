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

const body = document.querySelector("body");
let index = 0;

body.addEventListener('keydown', init);

function init(e) {
  let key = e.code.includes("Key") ? e.code.slice(e.code.indexOf("y") + 1).toLowerCase() : e.code;  
  if(key === codes[index]) {
    index++;
    if(index === codes.length) {
      alert("hurray");
      index = 0;
    }
  } else {
    index = 0;
  } 
}