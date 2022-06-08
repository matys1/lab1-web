const textBox = document.querySelector("#textBox"); //get element with id textBox
const output = document.querySelector("#output"); //get element with id output

function keypress (e) { //declare funtion named keypress and pass associated event object 'KeyboardEvent' named 'e'
  output.textContent = `You pressed "${e.key}".`; //use template literals to concatenate a string with KeyboardEvent.key parameter
};

textBox.addEventListener('keydown', keypress); //add event listener and handler