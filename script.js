
var hours = [nine, ten, eleven, twelve];

var nine = document.querySelector('#nineContent');
var ten = document.querySelector('#tenContent');
var eleven = document.querySelector('#elevenContent');
var twelve = document.querySelector('#twelveContent');
var one = document.querySelector('#oneContent');
var two = document.querySelector('#twoContent');
var three = document.querySelector('#threeContent');
var four = document.querySelector('#fourContent');
var five = document.querySelector('#fiveContent');

var thisHour = moment().hour();
var dateNow = moment();
var thisDay = moment().dayOfYear();

var togglePast = function(hour) {
    $(hour).removeClass("present");
    $(hour).addClass("past");
}

var toggleFuture = function(hour) {
    $(hour).removeClass("present");
    $(hour).addClass("future");
}

var checkTime = function(hour) {
    console.log('testing' + hour);
    if (thisHour > hour.dataset.time) { 
        togglePast(hour);
        console.log('in the past')
    }
    else if (thisHour < hour.dataset.time) {
        toggleFuture(hour);
    }
}

var editContent = function(Time) {
    var contentSelected = document.querySelector(".content[data-time='" + Time + "']");

    var content = contentSelected.querySelector("p").textContent;

// task text was clicked
$(".text").on("click", "p", function() {
    // get current text of p element
    var text = $(this)
      .text()
      .trim();
  
    // replace p element with a new textarea
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);
  
    // auto focus new element
    textInput.trigger("focus");
  });

checkTime(nine);
checkTime(ten);
checkTime(eleven);
checkTime(twelve);
console.log('test', thisHour + eleven.dataset.time);


// Determine if there's already localstorage for this date, if so load, if not, continue:
// Setup object array for that day to store in localstorage under the date




console.log('dateNow', dateNow);
console.log('thisHour', thisHour);
console.log('thisDay', thisDay)




// Display the date at the top of the calender

// Determine the current time
// Color code time blocks according to past/present/future hour 9AM-5AM
// Print timeblocks to page

// When you click an hour, you can edit the hour
// When you an hour blurs, save that hour and update localstorage

// When the SaveBtn is clicked, is anything necessary?