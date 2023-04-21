

//Interval to check and refresh time & date display
var dateTime = function() {
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY h:mm A'));
  colorCode()
}
setInterval(dateTime, 1000);


//Target textarea container, log value on save button click
// var container = $(".container-lg")
// container.on("click", ".saveBtn", function(event){
//   var lineHour = $(event.target).parent().val($(this).attr("data-time"))
//   var hour = parseInt(lineHour.attr("data-time"))
//   console.log(lineHour);
//   console.log(hour);
//   task = lineHour.children(".description").val()
//   console.log(task);
// });


var container = $(".container-lg");
var appointmentArray = [];
var tempArray = [];
var saveBtn = document.querySelector(".saveBtn");
$(".saveBtn").click(function (event) {
var w = event.currentTarget.parentElement.id;
var x = event.currentTarget.previousSibling;
var y = x.previousSibling;
var z = y.value;
console.log(w);
console.log(x);
console.log(y);
console.log(z);
tempArray = {
  blockId: w,
  appt: z,
};
appointmentArray.push(tempArray);
storeData();
});


function storeData() {
  console.log(appointmentArray);
  localStorage.setItem("blockText", JSON.stringify(appointmentArray));
  displayData();
}

function displayData() {
  appointmentArray = JSON.parse(localStorage.getItem("blockText"));
  for (var i = 0; i < appointmentArray.length; i++) {
    var a = document.getElementById(appointmentArray[i].blockId);
    console.log(a);
    var b = a.children[1].value;
    console.log(b);
  }
}

function renderData() {
  appointmentArray = JSON.parse(localStorage.getItem("blockText"));
  for (var i = 0; i < appointmentArray.length; i++) {
    var a = document.getElementById(appointmentArray[i].blockId);
    console.log(a);
    var b = a.children[1];
    b.textContent = appointmentArray[i].appt;
  }
}

function init() {
  renderData();
}

init();




// iterate through each children on an elemnt selected by jquery
 
function colorCode(){
  var currentTime = $('#currentDay').text();
  var currentHourBase = parseInt(currentTime.split(":")[0].slice(-2).trim());
  if(currentTime.search(/PM/)){
    console.log("it's nighttime")
    currentHourBase += 12
  } 
  container.children().each(function(){
    if(currentHourBase > $(this).attr("data-time")){
      $(this).addClass("past")
    }
     else if (currentHourBase == $(this).attr("data-time")){
      $(this).addClass("present")
    } else{
      $(this).addClass("future")
    }
  })
}


// // var saveBtn = document.querySelector(".saveBtn");
// saveBtn.addEventListener("click", function() { 
// });








$(function () {
  
$('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY h:mm A'));
 
});



// colorCode()


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
  