let numbernames = 0; //define a variable with starting value 0; this represents the number of elements in the array (array length)
let names = new Array(); //define an empty array
function SortNames() { //define a function that is invoked when the button is pressed
  thename = document.theform.newname.value; //get the name from the input field
  names[numbernames] = thename; //add the name value to the array as a new array element
  names.sort(); //sort the array that includes the new value
  document.theform.sorted.value = names.join("\n"); //return the sorted array in textarea concatenated using the newline character
  numbernames++; //increment the array element number for the next name
}