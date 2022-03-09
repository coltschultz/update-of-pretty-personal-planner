var nineC = { time: "nine", text:"", index: 0, hr: 9};
var tenC = { time: "ten", text:"", index: 1, hr: 10};
var elevenC = { time: "eleven", text:"", index: 2, hr: 11};
var twelveC = { time: "twelve", text:"", index: 3, hr: 12};
var oneC = { time: "one", text:"", index: 4, hr: 13};
var twoC = { time: "two", text:"", index: 5, hr: 14};
var threeC = { time: "three", text:"", index: 6, hr: 15};
var fourC = { time: "four", text:"", index: 7, hr: 16};
var fiveC = { time: "five", text:"", index: 8, hr: 17};

var schedule = [nineC, tenC, elevenC, twelveC, oneC, twoC, threeC, fourC, fiveC];


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
var hours = [nine, ten, eleven, twelve, one, two, three, four, five];    

var thisHour = moment().hour();
var year = moment().year();
var month = moment().month();
var day = moment().date();
var thisDay = moment().dayOfYear();

parsedSchedule = JSON.parse(localStorage.getItem("schedule" + thisDay));

// Local Storage Save/Load
var saveAll = function () {
    localStorage.setItem("schedule" + thisDay, JSON.stringify(schedule));
}

var loadAll = function() {
    if (parsedSchedule) {
        schedule = parsedSchedule
    }
}

loadAll();



// Populate from Local Storage
    var populate = function(obj) {
        var place = document.querySelector("#" + obj.time);
        var index = obj.index

        if (schedule[index].text.length > 0) {
        place.textContent = schedule[index].text;

        }
    }
    for (var i = 0; i < schedule.length; i++) {
        populate(schedule[i]);
    }

// Display the Date at the Top of the Screen
    todaysDate = moment().format("dddd, MMMM Do YYYY, h:mm a");

    setDate = function() {
        dateBox.innerHTML = "<p>" + todaysDate + "</p>"
        }
        
    setDate();

// Change the colors of hour depending on Past, Present, Future (Default: Present)
    var togglePast = function(hour) {
        $(hour).removeClass("present");
        $(hour).addClass("past");
    }

    var toggleFuture = function(hour) {
        $(hour).removeClass("present");
        $(hour).addClass("future");
    }

    console.log(thisHour);
    var checkTime = function(hour) {
        if (thisHour > hour.dataset.time) { 
            togglePast(hour);
        }
        else if (thisHour < hour.dataset.time) {
            toggleFuture(hour);
        }
    }

// Handle the Editing of Content
    $(".content").on("click", "p", function() {

        var element = $(this);
        var index = element.data("index");

        var text = $(this)
        .text()
        .trim();

        var textInput = $("<textarea>").attr("data-index",index).val(text);
        $(this).replaceWith(textInput);
        console.log(index);

    }); 

    $(".content").on("blur", "textarea", function() {

        var element = $(this);
        var index = element.data("index");

        var text = $(this).val();
    
        var textP = $("<p class='textContent' data-index=" + index + ">")
        .addClass("m-1")
        .text(text);

        $(this).replaceWith(textP);
        schedule[index].text = text;
        saveAll();
    });


// Save when floppy disk is clicked

    $(".saveBtn").on("click", "img", function() {
    console.log('Your work was saved.');
    saveAll();

    }); 

// Adjust colors according to the time

    for (var i = 0; i < hours.length; i++) {
        checkTime(hours[i]);
    }