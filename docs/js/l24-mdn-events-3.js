const btn = document.getElementById("main"); //return first button element

function random(number) { //parameter named number for providing a max value
  return Math.floor(Math.random() * (number+1)); //generates a random number between 0 and max value
}

function changeBackground(e) {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`; //a constant that stores a template literal string rgb(x, y, z);
  e.target.style.backgroundColor = rndCol; //assigns above constant to <body> backgroundColor
}

btn.addEventListener('click', changeBackground) //add click event listener and changeBackground event handler