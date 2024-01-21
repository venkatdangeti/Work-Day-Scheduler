
//variables
var weekday = "";
var day = 0;
var month = "";
var hour = 0;

//arrays with all month and weekday names

var monthName = [
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
  "December"
];

var weekdayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];


$(document).ready(function () {
  //day.js code for current date and time
  let NowMoment = dayjs().format("MMMM D, YYYY h:mm A");
  let displayDate = document.getElementById("currentDay");
  displayDate.innerHTML = NowMoment;
  let currentHour = dayjs().format("HH");

});