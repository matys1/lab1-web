const btn = document.querySelector('button'); //return first button element

function random(number) { //parameter named number for providing a max value
  return Math.floor(Math.random() * (number+1)); //generates a random number between 0 and max value
}

function changeBackground() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`; //a constant that stores a template literal string rgb(x, y, z);
  document.body.style.backgroundColor = rndCol; //assigns above constant to <body> backgroundColor
}

btn.addEventListener('click', changeBackground) //add click event listener and changeBackground event handler
btn.removeEventListener('click', changeBackground); //to remove an event listener after it's been added

// alternative to above removeEventListener() method above. Passes an AbortSignal to addEventListener() and then calls abort() method on the AbortController object that owns the AbortSignal. AbortSignal is a child object of the AbortController object.
/*
const btn = document.querySelector('button'); //return first button element
const controller = new AbortController(); //use AbortController() constructor to create a new AbortController object instance

function random(number) { //parameter named number for providing a max value
  return Math.floor(Math.random() * (number+1)); //generates a random number between 0 and max value
}

function changeBackground() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`; //a constant that stores a template literal string rgb(x, y, z);
  document.body.style.backgroundColor = rndCol; //assigns above constant to <body> backgroundColor
}

btn.addEventListener('click', changeBackground, { signal: controller.signal }); //add click event listener, changeBackground event handler and options object that contains a property named singal that's referencing a read only AbortController.signal property to return AbortController's associated AbortSignal object instance which is used below to remove the listener
controller.abort(); //AbortController.abort() method. The listener is removed when the given AbortSignal AbortControllers's abort() method is called. In other words, you call on the abort() method of the AbortController object to remove the listener via AbortController's AbortSignal child object that's passed to the addEventListener. You communicate with a DOM through AbortSignal object.
*/