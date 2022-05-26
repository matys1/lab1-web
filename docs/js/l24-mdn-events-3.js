const btn = document.getElementById("main"); //return the div with id main

function random(number) { //parameter named number for providing a max value
  return Math.floor(Math.random() * (number+1)); //generates a random number between 0 and max value
}

function changeBackground(e) { //pass the associated event object named e to the function
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`; //a constant that stores a template literal string rgb(x, y, z);
  e.target.style.backgroundColor = rndCol; //assigns above constant to event object target (which is the btn element itself) backgroundColor
}

btn.addEventListener('click', changeBackground) //add click event listener and changeBackground event handler