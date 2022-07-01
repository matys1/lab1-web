let counter = 0; //define a variable named counter and set it to 0
      
// call the Update() function 1s after the load
let timeoutID = window.setTimeout("Update();", 1000);

function Update() {
  counter++; //increment the counter variable
  const textField = document.getElementById("showText"); //get paragraph by its id showText
  textField.innerHTML = "The counter is now at " + counter; //amend the text within paragraph to display the value of counter
  timeoutID = window.setTimeout("Update();",1000); //wait 1s and call the Update() function again. this creates an infinite loop.
}

// set click event listeners for the restart button
// IMPORTANT: the script never terminates the initial loop and every time you click the reset button you add 1 more loop to the loops that are already running
document.getElementById("restart").addEventListener("click", function() {
  //window.clearTimeout(timeoutID); //add this line to make sure you never have more than 1 loop running
  counter = 0; //reset the counter variable to 0
  Update(); //initialize a new infinite loop
});

document.getElementById("stop").addEventListener("click", function() {
  window.clearTimeout(timeoutID);
});