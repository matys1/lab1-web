const btn = document.querySelector('button'); //get the first button and store it in a const named btn

function random(number) { //parameter named number for providing a max value
  return Math.floor(Math.random() * (number+1)); //generates a random number between 0 and max value
}

function changeBackground(e) { //define function named changeBackground and pass the associated MouseEvent object named e
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`; //a const that stores a template literal string rgb(x, y, z);
  e.target.style.backgroundColor = rndCol; //assigns above template literal const to event target backgroundColor
}

btn.addEventListener('click', changeBackground) //add click event listener to btn and changeBackground event handler