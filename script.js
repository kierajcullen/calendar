//Declare Variables

//Display date at the top of the page
// //Must update, use jquery
// $("#mydate").datepicker({});
// mindate = 0

// Date
// Using date object
var currentDay = new Date();
var date =
  currentDay.getMonth() +
  1 +
  "-" +
  currentDay.getDate() +
  "-" +
  currentDay.getFullYear();
// why does this have to be declared after
$("#currentDay").text(date);

// color-coded

//Create a save button with an on-click event

// Local storage
