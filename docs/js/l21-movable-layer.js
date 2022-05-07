//define two variables that store current initial position of the layer
var x=100, y=150;

//dx and dy can be either -1, 0 or 1 depending which button (top, bottom, left, right) is clicked 
function pos(dx,dy) { 
    //starting position of x is 100 and y is 150px
    //if you move left, dx is -1 and dy is 0
    //notice the += shorthand addition and assignment operator; meaning the stored value of x and y will be added to the value and then assigned
    x += 30*dx; //100 + (30*(-1)) = 100 + (-30) = 70 (x is 70)
    y += 30*dy; //150 + (30*0) = 150 + 0 = 150 (y is 70)
    obj = document.getElementById("square"); //reference object by Id square
    obj.style.top=y + "px"; //assign the new value stored in y to top
    obj.style.left=x + "px"; //assign the new value stored in x to left
}
function hideSquare() {
    obj = document.getElementById("square");
    obj.style.display="none"; //hide the object
}
function showSquare() {
    obj = document.getElementById("square");
    obj.style.display="block"; //display the object
}