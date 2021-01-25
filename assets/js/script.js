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
  currentDate.text(day + ", " + month + " " + date + "st" + ", " + year);
} else if (date === 2 || date === 22) {
  currentDate.text(day + ", " + month + " " + date + "nd" + ", " + year);
} else if (date === 3 || date === 23) {
  currentDate.text(day + ", " + month + " " + date + "rd" + ", " + year);
} else {
  currentDate.text(day + ", " + month + " " + date + "th" + ", " + year);
}

// call time-block class, return an integer
// this must be called before attr
var timeBlock = $(".timeBlock");

// return the attribute value
// it returns the value of the FIRST matched element
var timeBlockValue = parseInt($(timeBlock).attr("value"));

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

$(".saveBtn").on("click", function () {
  // each replaces a for loop
  // can you replace i with any?
  $(".task").each(function (i) {
    var text = $(this).val();
    // use dollar sign in console when using jquery
    console.log(this);
    // point to the ids for each time value
    // calls the attribute of the id
    var time = $(this).attr("id");
    console.log(time, text);
    localStorage.setItem(time, text);
    //get item to get from local storage
    //display the local storage
  });
});
// try to push users info to an array? parseInt, stringify, preventDefault()
var renderInput = function () {
  $("#input8").text(localStorage.getItem("input8"));
  $("#input9").text(localStorage.getItem("input9"));
  $("#input10").text(localStorage.getItem("input10"));
  $("#input11").text(localStorage.getItem("input11"));
  $("#input12").text(localStorage.getItem("input12"));
  $("#input13").text(localStorage.getItem("input13"));
  $("#input14").text(localStorage.getItem("input14"));
  $("#input15").text(localStorage.getItem("input15"));
  $("#input16").text(localStorage.getItem("input16"));
  $("#input17").text(localStorage.getItem("input17"));
};
renderInput();
