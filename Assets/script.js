
//Interval to check and refresh time & date display
var dateTime = function() {
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY h:mm A'));
  colorCode()
}
setInterval(dateTime, 1000);


//Target save button and journal entry areas, set event listener on save and push content into array
var container = $(".container-lg");
var appointmentArray = [];
var tempArray = [];
$(".saveBtn").click(function (event) {
var w = event.currentTarget.parentElement.id;
var x = event.currentTarget.previousSibling;
var y = x.previousSibling;
var z = y.value;
tempArray = {
  blockId: w,
  appt: z,
};
appointmentArray.push(tempArray);
storeData();
});


// Functions to set and retrieve input to/from local storage
function storeData() {
  localStorage.setItem("blockText", JSON.stringify(appointmentArray));
  renderData();
}

function renderData() {
  if (localStorage.length > 0) {
  appointmentArray = JSON.parse(localStorage.getItem("blockText"));
  for (var i = 0; i < appointmentArray.length; i++) {
    var a = document.getElementById(appointmentArray[i].blockId);
    var b = a.children[1];
    b.textContent = appointmentArray[i].appt;
  }
 }
}

function init() {
  renderData();
}

init();


//Color codes hour sections based on current time 
function colorCode(){
  var currentTime = $('#currentDay').text();
  var currentHourBase = parseInt(currentTime.split(":")[0].slice(-2).trim());
  if(currentTime.search(/PM/)){
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


//Displaying current day in time at head of page
$(function () { 
$('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY h:mm A')); 
});


