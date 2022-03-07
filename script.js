
var hours = [nine, ten, eleven, twelve, one, two, three, four, five];

var nine = "";
var ten = "";
var eleven = "";
var twelve = "";
var one = "";
var two = "";
var three = "";
var four = "";
var five = "";


// Determine the current date
var dateNow = moment();

// Get the hour (1-24)
var thisHour = moment().hour();

// Determine if there's already localstorage for this date, if so load, if not, continue:
// Setup object array for that day to store in localstorage under the date
var thisDay = moment().dayOfYear();



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