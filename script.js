
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

var currentDayEle = $('#currentDay');

weekday = weekdayName[dayjs().day()]; //0 to 6 starts on sat
day = dayjs().date(); //1 to 31
month = monthName[dayjs().month()]; //0 to 11 starts on Janaury
hour = dayjs().hour(); // 0 to 23 starts on 12 AM


//prints out current date
currentDayEl.text(weekday + ", " + month + " " + day);
