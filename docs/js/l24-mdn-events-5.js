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
    para.innerHTML = 'Success!'; //print success for form being submitted (flashes only for 1s ??)
  };
};

form.addEventListener('submit', formsub); //add an event listener for 'submit' event and formsub event handler