
var hours = [nine, ten, eleven, twelve];

var dateBox = document.querySelector('#date');
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
var year = moment().year()
var month = moment().month()
var day = moment().date()
var thisDay = moment().dayOfYear();

dateBox.innerHTML = "<p>" + month + "-" + day + "-" + year + "</p>"
    // var shownDate = document.createElement("p");
    // shownDate.textContent = "asdf" + thisDay;
    // dateBox.appendChild(showdate);


var togglePast = function(hour) {
    $(hour).removeClass("present");
    $(hour).addClass("past");
}

var toggleFuture = function(hour) {
    $(hour).removeClass("present");
    $(hour).addClass("future");
}

var checkTime = function(hour) {
    if (thisHour > hour.dataset.time) { 
        togglePast(hour);
    }
    else if (thisHour < hour.dataset.time) {
        toggleFuture(hour);
    }
}

var editContent = function(Time) {
    var contentSelected = document.querySelector(".content[data-time='" + Time + "']");

    var content = contentSelected.querySelector("p").textContent;
}


// Handle the clicks of content
$(".content").on("click", "p", function() {
    console.log('success');
    // get current text of p element
    var text = $(this)
      .text()
      .trim();
  
    // replace p element with a new textarea
    var textInput = $("<textarea>").val(text);
    $(this).replaceWith(textInput);
  
    // auto focus new element
    textInput.trigger("focus");
  }); 

  // editable field was un-focused
$(".content").on("blur", "textarea", function() {
    // get current value of textarea
    var text = $(this).val();
  

      var textP = $("<p>")
      .addClass("m-1")
      .text(text);
  
    // replace textarea with new content
    $(this).replaceWith(textP);
});

checkTime(nine);
checkTime(ten);
checkTime(eleven);
checkTime(twelve);


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

// When the SaveBtn is clicked, is anything necessary

// Date is 1 month behind