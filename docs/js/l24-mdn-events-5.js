//retrieve the necessary elements by id or using querySelector
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('p');

function formsub(e) { //declare function named 'formsub' and pass associated event object 'SubmitEvent' named as 'e'
  if (fname.value === '' || lname.value === '') { //if either first name or last name are blank then
    e.preventDefault(); //prevent the default behaviour of a form to be submitted and
    para.innerHTML = 'You need to fill in both names!'; //print a message 
  } else { //else
    para.innerHTML = 'Success!'; //print success for form being submitted
    e.preventDefault() //but then prevent the default behaviour of a form being submitted. this fixes the message only flashing for 1s and then clearing or crashing (404 in jsfiddle). There are more attributes and things that need to be specified to properly handle <form> submissions that I will probably learn in next lessons.
  };
};

form.addEventListener('submit', formsub); //add an event listener for 'submit' event and formsub event handler