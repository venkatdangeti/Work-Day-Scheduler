
//ready function
$(document).ready(function () {
  //day.js code for current date and time
  let NowMoment = dayjs().format("MMMM D, YYYY h:mm A");
  let displayDate = document.getElementById("currentDay");
  displayDate.innerHTML = NowMoment;
  let currentHour = dayjs().format("HH");


  //get hour from each time block and compares it to actual time
  $(".time-div").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];

    if (currentHour == timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });
});