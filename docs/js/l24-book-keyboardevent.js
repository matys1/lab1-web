function displayKey(e) { //define a function named displayKey and pass associated event object KeyboardEvent as e
  const p_keys = document.getElementById('keys'); //get the <p> by id and store in const named p_keys
  p_keys.innerHTML += e.key; //add-assign the value of key property to the paragraph
}

document.addEventListener("keydown",displayKey); //add event listener to the document interface listening for the keydown event type and displayKey event handler function