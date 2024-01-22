
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

  //get values from time and value divs and save them to the local storage
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });


});