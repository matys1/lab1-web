// Get the current date
now = new Date(); //return: Thu May 19 2022 11:50:04 GMT+0200 (Central European Summer Time)

// Split into hours, minutes, seconds
hour_of_day = now.getHours(); //return: 11
minute_of_hour = now.getMinutes(); //return: 50
seconds_of_minute = now.getSeconds(); //return: 4

// Display the time
document.write("<h2>"); //open header
document.write(hour_of_day + ":" + minute_of_hour + ":" + seconds_of_minute); //return: 11:50:4
document.write("</h2>"); //close header

// Display a greeting
document.write("<p>"); //open paragraph
if  (hour_of_day < 10)  { //flow control using else...if to decide greeting text
     document.write("Good morning.");
}  else if ((hour_of_day >= 14) && (hour_of_day <= 17)) {
     document.write("Good afternoon.");
}  else if (hour_of_day >= 17)  {
     document.write("Good evening.");
}  else  {
     document.write("Good day.");
}
document.write("</p>"); //close paragraph