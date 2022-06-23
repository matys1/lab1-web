// below code runs perfectly, as long as the <script> tag in HTML document is
// placed before the closing </body> tag. If it's placed in the <head> of the document
// then you need to uncomment the event listener to prevent the script from running
// before the DOM is loaded (before the div main even exiss) 

//window.addEventListener("load", function() { // DOMContentLoaded event (placed on document) instead of load event (placed on window) also works in this case
  const a = document.getElementById("main"); // get the div main by id and store in const a
  const b = parseInt(a.textContent); // get the contents of the div, parse them to int and store in const b

  if (b === 1) { // if const b strictly equals 1 then
    console.log("div contains 1"); //console log a message
  }
//})