// Work Day Scheduler
//authored by Charissa Hollister 05/10/2022
//**************************** */

// task object array
//task information array //no clue yet what we want to include
// starting tasksUsed "empty array"
  //blah blah is constant for testing

//code for pulling in local storage or creating new
// var tasksUsed;
// var todayTasks = localStorage.getItem("tasksUsed");
//     if (tasksUsed) {tasksUsed = JSON.parse(todayTasks)} 
//     else {tasksUsed = [];}
// console.log(tasksUsed)

//---------Global variables-----------
//Get the current date and time with Moment.js for header
const todayDate = moment().format("dddd MMM Do YYYY"); //current date
var dateUsed;                                   //date in local storage
var setDate = localStorage.getItem("dateUsed"); //date to use
if (setDate) {
    dateUsed = JSON.parse(setDate);
  } else {
    dateUsed = todayDate;
  }
//current hour for color indicators
  var currentHour = moment().hour()
  console.log(currentHour)
  console.log(setDate)
  console.log(todayDate)
var hour1 = $("#hour1")
var hour2=  $("#hour2")
var hour3=  $("#hour3")
var hour4=  $("#hour4")
var taskInfo = [
    {hour1:""},
    {hour2:""},
    {hour3:""},
    {hour4:""},
];
var lsTaskInfo = JSON.parse(localStorage.getItem("taskInfo"))
var timeBlock = document.querySelector(".time-block");
var hour1 = document.querySelector("#hour1");
var inputs;
var saveBtn = document.querySelector(".saveBtn");

////when they type in info field
timeBlock.addEventListener("input",function(event){
    inputs = {[event.target.id]:event.target.value}
})



// when they click save 
saveBtn.addEventListener("click",function(){
    if(lsTaskInfo?.length){
        taskInfo = lsTaskInfo;
    }
for (var i = 0; i< taskInfo.length; i++){
    //add input to task info
    taskInfo[i] = (`hour${i+1}`).value //????
}
    console.log(task)
localStorage.setItem("taskInfo",JSON.stringify(taskInfo))
console.log(taskInfo)
} );

// for (var i= 0;i < lsTaskInfo.length; i++){
//     var hour = document.getElementById(`hour${i+1}`)
// if(lsTaskInfo.length){
//     hour.textContent = lsTaskInfo[i]
// }
// }
// function fillInTasks(){

// }

//-----------Code------------





//---------define functions---------
////to fill in each hour's tasks
function populateTasks(){
    for(var i=1; i < 10 ; i++){
        var taskBlock = document.getElementById("hour" + i)
        var taskInfoSet = tasksUsed[(i-1)].taskInfo;
        taskBlock.textContent = taskInfoSet;
        console.log(taskBlock.textContent);
    }
}
populateTasks();


//////check if date in ls is before today's date
// function checkDate(){//timeBlockCreation()
//     if(setDate){
//     //    var now = JSON.stringify("Sunday May 15th 2022");     
//        var now = JSON.stringify(todayDate); 
//         console.log(now);
//         console.log(setDate)
//         console.log(todayDate)
//         if(now == setDate){keepTimeBlock();}
//             else
//             {var clearKeep = prompt("enter 'clear' if you want to clear schedule or 'keep' keep previous date and tasks?");
//                 clearKeep = clearKeep.toLowerCase();
//                 console.log(clearKeep)
//             if(clearKeep === 'clear') {clearSchedule();}
//             else if(clearKeep === 'keep') {populateTasks();}  
//             else {checkDate();}
//             console.log(clearKeep)
//             keepTimeBlock()
//             } 
//     }
//     else {
//         timeBlockCreation();
//     }
//     } 


//---put date in header---
function keepTimeBlock(){
    var dateBlock = document.querySelector("#currentDay");
    dateBlock.textContent = dateUsed;
}
function timeBlockCreation(){
    var dateBlock = document.querySelector("#currentDay");
    dateBlock.textContent = dateUsed;
    localStorage.setItem("dateUsed", JSON.stringify(dateUsed));   //({'dateUsed': new Date()}));
}
//window.onload = checkDate();
timeBlockCreation();


//------color indicator of past, present, future-----
//currentHour = 12 //constant for testing
function relativeTime(){
for(var i=1; i < 10 ; i++){
    ii = i + 8;
    console.log(currentHour);
    console.log(ii);
        if(currentHour > ii){
            $("#hour" + i).addClass("past");}
    else if(currentHour === ii){$("#hour" + i).addClass("present");}
    else {$("#hour" + i).addClass("future");}
}}
relativeTime();

//







// function to clear local storage
function clearSchedule() {
    if (confirm("Current tasks will be deleted; Proceed with 'Clear Schedule'?"))
    {    localStorage.clear();
        location.reload();
    }
  }





//-----------color blocks--------
    //figure out if want to run every 15 mins 
//Color blocks based on current time
    //past hours gray
    //current hour red/pink
    //future hours green

//Edit Event Details
    //make box editable
    //update formatting to indicate it's in edit mode
    //change from locked image to save button
    //remove focus from box after saved
    //click outside the box w/o save returns ls box content

//save event details
    //stores event data in ls
    //changes button to locked image












//-------overall function to initiate-------




//---------------Add event listener-----------

//clicks button "clearSchedule"  //clear ls  //refresh the page anew
var clearButton = document.querySelector("#clearBtn")
clearButton.addEventListener("click", clearSchedule);


//clicks button "Save"
    //sends data from that row to ls
    //return square to locked image

//clicks event details
    //make box editable

//clicks save
    //update event details for that row in ls









    ////////////from task master sections//////////////////
//audit task
//create task
//load task
// if nothing in localStorage, create a new object to track all task status arrays
//loop over object properties
//loop over sub-array
//save task
// trim down list's ID to match object property
//update array on tasks object and save
//remove task
//task text was clicked
//get current text of p element
//replace p element with new textarea
//autofocus new element
//editable field was un-focused
//get current value of textarea
//update task in array and re-save to localstorage
//recreate p element
//replace textarea with new content
//set interval for refresh
//load tasks for the first time



