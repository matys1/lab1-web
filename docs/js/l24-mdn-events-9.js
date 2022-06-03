const container = document.querySelector('#container'); //get the container div and store in a const named container

function random(number) { //parameter named number for providing a max value to a function named random
  return Math.floor(Math.random() * (number+1)); //generates a random number between 0 and max value
}

function newColor() { //define a function named newColor
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`; //a constant that stores a template literal string rgb(x, y, z);
  return rndCol; //returns the const string
}

function changeColor (e) { //define a function named changeColor and pass the MouseEvent object as parameter named e
  e.target.style.backgroundColor = newColor(); //change the background color of the event object target element. note this is the actual target element not currentTarget - the parent div that has the handler
}

container.addEventListener('click', changeColor); //add click event listener to the container div and changeColor event handler

//or for shorter syntax you can replace everything from line 12 with the below
//container.addEventListener('click', e => e.target.style.backgroundColor = newColor());