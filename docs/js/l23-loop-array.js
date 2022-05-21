names = new Array(); //create an array called names
//variabls must be defined outside the do...while loop
let i = 0; //crete a variable named i and initialize it with 0; this will serve as array element index
let next; //create a variable named next

// loop and prompt for names
do {
  next = window.prompt("Enter the Next Name:"); //prompt for a name and store it in the next variable
  if (next > "") { //if the name entered is greater than an empty string then
    names[i] = next; //assign the name to an indexed element of names array
  };
  i++; //increment i variable (array element index) by 1
} while (next > ""); //keep looping as long as the entered name is greater than an empty string
//if you leave the input field blank and press OK, the prompt will accept it as empty string and the comparison condition will return false and it will stop looping
//if you click cancel, the prompt will accept it as null and the comparison condition will return false and it will stop looping
//as long as you enter anything at all and don't click cancel it will keep looping 

document.write("<h2>" + (names.length) + " names entered.</h2>"); //print the array length (number of elements in the aray)

document.write("<ol>"); //open the list
for (const name of names) { //loop the names array; for...of is better than for...in for loopnig arrays and easier to access array values
  document.write("<li>" + name + "</li>"); //print a list of all elements in the array
}
document.write("</ol>"); //close the list