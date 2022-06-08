function mousestatus(e) { //define function named mousestatus and pass associated MouseEvent object named e
  const btn = e.button; //get MouseEvent object button property and store it in a const named btn
  let whichone; //define a variable named whichone
  switch(btn) { //create a switch statement to test the btn const
    case 0:
      whichone = "Left"; //if btn = 0 store Left in whichone variable
      break;
    case 1:
      whichone = "Middle"; //if btn = 1 store Middle in whichone variable
      break;
    case 2:
      whichone = "Right"; //if btn = 2 store Right in whichone variable
      break;
    default:
      whichone = "UNKNOWN"; //if neither of the above store UNKNOWN in whichone variable
  }
  const message = e.type + " : " + whichone + "<br>"; //concatenate event object property type (belonging to the main Event inferface) with variable whichone and store it in a const named message
  document.getElementById('testarea').innerHTML += message; //add-concatenate the message to the div
  e.preventDefault(); //invoke the preventDefault() method to cancel the default behavior of clicking <a> which is to follow the link
}

const obj = document.getElementById('testlink'); //get <a> by id and store it in a const named obj

//add the same event handler for 4 different event types:
obj.addEventListener("mousedown", mousestatus);
obj.addEventListener("mouseup", mousestatus);
obj.addEventListener("click", mousestatus);
obj.addEventListener("dblclick", mousestatus);