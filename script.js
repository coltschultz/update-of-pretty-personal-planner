



var nineC = { time: "nine", text:"" }
var tenC = { time: "ten", text:"" }
var elevenC = { time: "eleven", text:"" }
var twelveC = { time: "twelve", text:"" }
var schedule = [nineC, tenC, elevenC, twelveC];


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
var hours = [nine, ten, eleven, twelve];    

var thisHour = moment().hour();
var year = moment().year()
var month = moment().month()
var day = moment().date()
var thisDay = moment().dayOfYear();

var setDate = function() {
dateBox.innerHTML = "<p>Today's Date (Month/Day/Year): " + month + "-" + day + "-" + year + "</p>"
}

setDate();

var saveAll = function () {
    localStorage.setItem("schedule", JSON.stringify(schedule));
}

var loadAll = function() {
    tasks = JSON.parse(localStorage.getItem("schedule"));
}

loadAll();

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

// Handle the clicks of content
$(".content").on("click", "p", function() {
    console.log('success');
    // get current text of p element

    var element = $(this);
    var index = element.data("index");

    var text = $(this)
      .text()
      .trim();
    
    

  
    // replace p element with a new textarea
    var textInput = $("<textarea>").attr("data-index",index).val(text);
    $(this).replaceWith(textInput);
  
    // auto focus new element
    textInput.trigger("focus");
  }); 

  // editable field was un-focused
$(".content").on("blur", "textarea", function() {

    var element = $(this);
    var index = element.data("index");

    var text = $(this).val();
  

      var textP = $("<p>")
      .addClass("m-1")
      .text(text);



      schedule[index].text = text;
        saveAll();
    // replace textarea with new content
    $(this).replaceWith(textP);
});

var populate = function(obj) {
    var place = document.querySelector("#" + obj.time);
    console.log(place);

    place.textContent = obj.text;
}




checkTime(nine);
checkTime(ten);
checkTime(eleven);
checkTime(twelve);


// Determine if there's already localstorage for this date, if so load, if not, continue:
// Setup object array for that day to store in localstorage under the date









// Display the date at the top of the calender

// Determine the current time
// Color code time blocks according to past/present/future hour 9AM-5AM
// Print timeblocks to page

// When you click an hour, you can edit the hour
// When you an hour blurs, save that hour and update localstorage

// When the SaveBtn is clicked, is anything necessary

// Date is 1 month behind