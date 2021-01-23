//Declare Variables

//Display date at the top of the page
// //Must update, use jquery
// $("#mydate").datepicker({});
// mindate = 0

// Date
// Using date object
// var currentDay = new Date();
// var date =
//   currentDay.getMonth() +
//   1 +
//   "-" +
//   currentDay.getDate() +
//   "-" +
//   currentDay.getFullYear();
// // why does this have to be declared after
// $("#currentDay").text(date);

// color-coded

//Create a save button with an on-click event

// Local storage

// var currentDate = $("#currentDay");

// currentDate.text(
//   days[new Date().getDay()] +
//     ", " +
//     mons[new Date().getMonth()] +
//     " " +
//     new Date().getDate() +
//     "th"
// );

// set item and get item with stringify
// grab array with json.parse
// add the classes with colors, military time

var currentDate = $("#currentDay");

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// Use for past, present and future
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// var years = ["2021", "2022", "2023", "2024"];
var currentDay = new Date();

var day = days[new Date().getDay()];
var month = months[new Date().getMonth()];
var date = currentDay.getDate();
// var date =  new Date().getDate();
// var year = years[new Date().getYear()];
var year = new Date().getFullYear();
var currentTime = new Date().getHours();
// var rightNow = newDate();
// console

if (date === 1 || date === 21 || date == 31) {
  currentDate.text(day + " " + month + " " + date + "st" + ", " + year);
} else if (date === 2 || date === 22) {
  currentDate.text(day + " " + month + " " + date + "nd" + ", " + year);
} else if (date === 3 || date === 23) {
  currentDate.text(day + " " + month + " " + date + "rd" + ", " + year);
} else {
  currentDate.text(day + " " + month + " " + date + "th" + ", " + year);
}

// call time-block class, return an integer
// this must be called before attr
var timeBlock = $(".time-block");

// return the attribute value
// it returns the value of the FIRST matched element
var timeBlockValue = parseInt($(timeBlock[i]).attr("value"));

// using time, determine whether the task is past, present or future
for (var i = 0; i < timeBlock.length; i++) {
  var timeBlockValue = parseInt($(timeBlock[i]).attr("value"));
  if (timeBlockValue < currentTime) {
    $(timeBlock[i]).addClass("past");
  } else if (timeBlockValue === currentTime) {
    $(timeBlock[i]).addClass("present");
  } else if (timeBlockValue > currentTime) {
    $(timeBlock[i]).addClass("future");
  }
}

// push to local storage as an array
var userInput = [];

function renderTasks() {
  for (var i = 0; i < timeBlock.length; i++) {}
}

$(".saveBtn").on("click", function () {
  //console.log(this)
  $(".task").each(function (i) {
    var text = $(this).val();
    // use dollar sign in console when using jquery
    console.log(this);
    // console.log($(this).parent().parent());
    var time = $(this).attr("id");
    console.log(time, text);
    localStorage.setItem(time, text);
    //display the local storage
  });
});
