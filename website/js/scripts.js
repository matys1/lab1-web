window.onload = function() {
	now = new Date();
	hours = now.getHours();
	mins = now.getMinutes();
	secs = now.getSeconds();
document.getElementById("TimeVal").innerHTML = hours + ':' + mins + ':' + secs;
}