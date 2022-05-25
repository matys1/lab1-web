const btn = document.querySelector('button'); //return first button element

function random(number) { //parameter named number for providing a max value
  return Math.floor(Math.random() * (number+1)); //generates a random number between 0 and max value
}

function changeBackground() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`; //a constant that stores a template literal string rgb(x, y, z);
  document.body.style.backgroundColor = rndCol; //assigns above constant to <body> backgroundColor
}

btn.addEventListener('click', changeBackground) //add click event listener and changeBackground event handler

// code below is equivalent to above just made shorter using anonymous arrow function expression with no arguments instead of using a named function
/*
const btn = document.querySelector('button'); //return first button element

function random(number) { //parameter named number for providing a max value
  return Math.floor(Math.random() * (number+1)); //generates a random number between 0 and max value
}

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`; //a constant that stores a template literal string rgb(x, y, z);
  document.body.style.backgroundColor = rndCol; //assigns above constant to <body> backgroundColor
});
*/