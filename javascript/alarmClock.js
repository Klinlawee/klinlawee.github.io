function alarmClock(){ 
//INPUT get todays day, month, day of month, and day of week from computer's clock.
var now = new Date();
var month = now.getMonth();
var dayOfMonth = now.getDate();
var dayOfWeek = now.getDay(); 
//PROCESSING compare day of week to determine if it is a weekend.
//set holidays with the && logical operator.
let message;
if ((dayOfWeek == 0) || (dayOfWeek ==6)) {
    message = "Sleep in"
} 
else if (((month == 0) && (dayOfMonth == 1)) || ((month == 6) && (dayOfMonth ==4)) || ((month == 11) && (dayOfMonth ==25))) {
    message = "Sleep in"
}
else{
    message = "Get up!"
} 
    //OUTPUT the correct message to the user by using the Id embedded in the HTML code.
document.getElementById('alarm').innerHTML = message;
}


   