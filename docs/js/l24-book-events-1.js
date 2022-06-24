// below code is very straight forward and just hides or shows diferent
// elements (display = none or block) based on the click event

document.getElementById("eShow").addEventListener("click", function() {
  this.style.display = 'none'; // this refers to eShow; the element the listener is attached to (parent element)
  document.getElementById("eHide").style.display='block';
  document.getElementById("elevation").style.display='block';
});
document.getElementById("eHide").addEventListener("click", function() {
  this.style.display = 'none'; // this refers to eHide; the element the listener is attached to (parent element)
  document.getElementById("eShow").style.display='block';
  document.getElementById("elevation").style.display='none';
});
document.getElementById("pShow").addEventListener("click", function() {
  this.style.display = 'none'; // this refers to pShow; the element the listener is attached to (parent element)
  document.getElementById("pHide").style.display='block';
  document.getElementById("photos").style.display='block';
});
document.getElementById("pHide").addEventListener("click", function() {
  this.style.display = 'none'; // this refers to pHide; the element the listener is attached to (parent element)
  document.getElementById("pShow").style.display='block';
  document.getElementById("photos").style.display='none';
});