// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

const currentDay = document.getElementById("currentDay")
function updateTime(){
    const now = moment().format('LLLL');
    currentDay.textContent = now
}
setInterval(updateTime, 1000);
updateTime();

var workHour = [0,1,2,3,4,5,6,7,8,9]

var currentHour = moment().format('H')
console.log(currentHour)

// var textBox1 = $('box1')
$(".time-block").each(function() {
for(i = 0; i < workHour.length; i++){
    if(workHour[i] < currentHour){
        $(this).addClass("past")
    } else if (workHour[i] === currentHour){
        $(this).addClass("present")
    } else if (workHour[i] === currentHour){
        $(this).addClass("future")
}
console.log(currentHour)
console.log(workHour[i])
console.log($(this))
}})