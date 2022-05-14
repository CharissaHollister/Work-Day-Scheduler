// Global variables 





//--------------date and time---------------------
//Get the current date and time with Moment.js for header
const todayDate = moment().format("dddd MMM Do YYYY"); //current date
function dateBlock(){
    var dateBlockNow = document.querySelector("#currentDay");
    dateBlockNow.textContent = todayDate;
}
dateBlock()
//------color indicator of past, present, future-----
//current hour for color indicators
var currentHour = moment().hour()
function relativeTime(){
    for(var i=1; i < 10 ; i++){
        var ii = i + 8;
            if(currentHour > ii){
                $("#hour" + i).addClass("past");}
        else if(currentHour === ii){$("#hour" + i).addClass("present");}
        else {$("#hour" + i).addClass("future");}
    }}
relativeTime();

//verify date and times
    console.log(currentHour)
    console.log(todayDate)
    


//----------------Task info-------------------
//task info sets
var taskInfoEmpty = [
    {Info:"dfgarg1", Hour:"hour1"},
    {Info:"dfgarg2", Hour:"hour2"},
    {Info:"dfgarg3", Hour:"hour3"},
    {Info:"dfgarg4", Hour:"hour4"},
];
var lsTaskInfo = JSON.parse(localStorage.getItem("taskInfo"))
    // if(lsTaskInfo){taskInfo=lsTaskInfo}
    // else
    {taskInfo = taskInfoEmpty}
console.log(taskInfo)









//fill in tasks from taskInfo array
function fillInTasks(){
    for(var i=0; i < taskInfo.length ; i++){
        var ii = i + 1;
        //id of info block
        // idNow = taskInfo[i].Hour;
        // console.log(idNow)
        //grab task info from array for that hour 
        var taskInfoEach = taskInfo[i].Info;
        console.log(taskInfoEach)
        //write task info each to the task cell
        var hourInfoBlock = document.querySelector(".hourInput")
        console.log(hourInfoBlock)
        hourInfoBlock.textContent = JSON.stringify(taskInfoEach);
        console.log(hourInfoBlock.textContent)
        ///////how to get the text to display in box
        taskInfo[i] = (`hour${i+1}`).value //????
        localStorage.setItem("taskInfo",JSON.stringify(taskInfoEach))
    }
}
fillInTasks();

////when they type in info field
var timeBlock = document.querySelector(".time-block");
var inputs;

timeBlock.addEventListener("input",function(event){
    inputs = {[event.target.id]:event.target.value}
})



// when they click save 
var saveBtn = document.querySelector(".saveBtn");
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






// function populateTasks(){
//     for(var i=1; i < 10 ; i++){
//         var taskBlock = document.getElementById("hour" + i)
//         var taskInfoSet = taskUsed[(i-1)].taskInfo;
//         taskBlock.textContent = taskInfoSet;
//         console.log(taskBlock.textContent);
//     }(`hour${i+1}`)
// }
// populateTasks();
















// function to clear local storage
function clearSchedule() {
    if (confirm("Current tasks will be deleted; Proceed with 'Clear Schedule'?"))
    {    localStorage.clear();
        location.reload();
    }
  }
//clicks button "clearSchedule"  //clear ls  //refresh the page anew
var clearButton = document.querySelector("#clearBtn")
clearButton.addEventListener("click", clearSchedule);