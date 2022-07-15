const img = document.createElement("img"); // global scope; create an <img> element and store it in a const named img
graphicBox("check2"); // run the function defined below

function graphicBox(box) {
  // find the object and its parent
  const obj = document.getElementById(box); // parameter box passed value is check2; gets the check2 input checkbox element
  const parentobj = obj.parentNode; // get parent element (<p>) of check2 input box element

  // hide the check2 input checkbox
  obj.style.display = "none"; 

  // create the image element and set its onclick event
  img.addEventListener("click", Toggle); // add click event listener with Toggle as handler
  img.src = "assets/checkbox-unchecked.png"; // set the src attr of the <img> elem to unchecked.png; this .png is displayed when the graphicBox function is first called when script loads

  // set the id attr of the <img> element to be imgcheck2
  img.id = "img" + box; 

  // insert the <img> element in the DOM before the check2 input box element; both are on the same level and have parent <p>
  parentobj.insertBefore(img, obj);
}

function Toggle() {
  // find the checkbox by removing "img" from the image ID
  const checkid = img.id.substring(3); // returns value check2 (substring of imgcheck2) and stores it in a const named checkid
  const checkbox = document.getElementById(checkid); // pass the const checkid to get to get the input checkbox element and store it in a const named checkbox 

  // click the checkbox
  checkbox.click(); // run the click() method to check the input checkbox

  // display the right .png for the clicked or unclicked state of the underlying checkbox
  let file;
  if (checkbox.checked) { // if the checkbox checked property (IDL attribute) returns true then
     file = "assets/checkbox-checked.png"; // get checked.png and store it in a variable named file
  }  else {
     file = "assets/checkbox-unchecked.png"; // get the unchecked.png and store it in a variable named file
  }
  img.src = file; //set the src attr of the <img> element to the value stored in var named file
}