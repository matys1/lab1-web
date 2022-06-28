document.getElementById("openNew").addEventListener("click", function() { //add a click event listener to the openNew button and define an anonymous function
  const newWin = window.open("", "NewWin", "width=200, height=100"); //define a const newWin that opens a new blank window (and thus stores the new window object) named NewWin with width 200 and height 100
});

document.getElementById("closeNew").addEventListener("click", function() { //add a click event listener to the closeNew button and define an anonymous function
  newWin.close(); //close the newWin window
});

document.getElementById("closeSelf").addEventListener("click", function() { //add a click event listener to the closeSelf button and define an anonymous function
  window.self.close(); //attempt to close the main window; will return error. A script can only close a window that the script itself opened.
});