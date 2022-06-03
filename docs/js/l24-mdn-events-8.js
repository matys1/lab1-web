const btn = document.querySelector('button'); //get the button and store it in a const named btn
const container = document.querySelector('div'); //get the div that contains the video and store it in a const named container
const video = document.querySelector('video'); //get the video element and store in a const named video

function displayVideo() { //define a function named displayVideo that will change the class attribute of div from hidden to showing
  if (container.getAttribute('class') === 'hidden') { //get class attribute of div element and check if hidden
    container.setAttribute('class','showing'); //if true then set the class attribute to showing
  }
}

btn.addEventListener('click', displayVideo); //add click event listener to the button element and displayVideo function as event handler
container.addEventListener('click', () => container.setAttribute('class', 'hidden')); //add click event listener to the div element and anonymous arrow function as event handler (the function sets the class attribute of the div as hidden) 
video.addEventListener('click', () => video.play()); //add click event listener to the video element and anonymous arrow function as event handler (the function calls the play() method of the video element)
/*
//replace line 13 with the lines below to see how to stop event bubbling
video.addEventListener('click', e => { //add click event listener to the video element and anonymous arrow function as event handler with MouseEvent object named e passed as parameter
  video.play(); //call the play() method of the video element
  e.stopPropagation(); //stop the event from bubbling further (does not bubble to any other elements)
});
*/