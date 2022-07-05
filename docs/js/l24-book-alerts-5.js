document.getElementById("alert").addEventListener("click", function() { //add click event listener to the button alert
  let alertVal = window.alert("This is a test alert."); //display an alert message. since alert doesn't return anything, the variable will store undefined
});

document.getElementById("confirm").addEventListener("click", function() { //add click event listener to the button confirm
  let confirmVal = window.confirm("Would you like to confirm?"); // display a confirmation box and store the returned value in a variable named confirmVal
});

document.getElementById("prompt").addEventListener("click", function() { // add click event listener to the button prompt
  let promptVal = window.prompt("Enter Text:","This is the default."); // display a prompt box and store the returned value in a variable named promptVal
});