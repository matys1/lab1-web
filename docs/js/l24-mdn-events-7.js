const container = document.querySelector('#container'); //get the container div and store it in a const named container
const button = document.querySelector('button'); //get the first button element in the document and store it in a const named button
const output = document.querySelector('#output'); //get the output pre and store it in a const named output

function handleClick(e) { //declare function named handleClick and pass associated event object 'MouseEvent' named as 'e'
  output.innerHTML += `You clicked on a ${e.currentTarget.tagName} element\n`; //use a template literal and addition assignment (+=) to print event objects currentTarget (the element the event handler is attached) and return its tagName
}

document.body.addEventListener('click', handleClick); //add event listener for 'click' event to body and an event handler named handleClick
container.addEventListener('click', handleClick); //add event listener for 'click' event to container div and an event handler named handleClick
button.addEventListener('click', handleClick); //add event listener for 'click' event to button and an event handler named handleClick