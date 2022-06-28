let NewWin; //declare variale NewWin

window.addEventListener("load", function() { //add a load event to the window object
  NewWin = window.open('','NewWin', 'width=200,height=100'); //open a new pop-up window named NewWin after page has loaded
});

function doIt() {
  if (NewWin.name == undefined) { //NewWin name property will return undefined if the window has been closed, so if true then
    NewWin = window.open('','NewWin', 'width=200,height=100'); //open a new pop-up window named NewWin
  }
  if ((document.changeform.w.value) && (document.changeform.h.value)) { //if the form inputs w and h both contain values then
    NewWin.resizeTo(document.changeform.w.value, document.changeform.h.value); //resize the window according the those values
  }
  if ((document.changeform.x.value) && (document.changeform.y.value)) { //if the form inputs x and y both contain values then
    NewWin.moveTo(document.changeform.x.value, document.changeform.y.value); //move the window according the those values
  }
}

document.getElementById("doIt").addEventListener("click", doIt); //add click event listener and doIt handler to the button doIt