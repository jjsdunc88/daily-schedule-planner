

//Interval to check and refresh time & date display
var dateTime = function() {
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY h:mm A'));
  console.log("test");
}
setInterval(dateTime, 15000);


//Target textarea container, log value on save button click
var container = $(".container-lg")
container.on("click", ".saveBtn", function(event){
  var lineHour = $(event.target).parent().val($(this).attr("data-time"))
  var hour = parseInt(lineHour.attr("data-time"))
  console.log(lineHour);
  console.log(hour);
  task = lineHour.children(".description").val()
  console.log(task);
});
 

// `let savedSchedule = {
//   "hour": hour,
//   "task": task
//   }`



// var saveBtn = document.querySelector(".saveBtn");
// saveBtn.addEventListener("click", function() { 
// });




$(function () {
 
 




//  Add code to display the current date in the header of the page.
// $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY h:mm A'));
 
});






// $(document).ready(function(){ - recommended by tutor to start jquery


    
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  