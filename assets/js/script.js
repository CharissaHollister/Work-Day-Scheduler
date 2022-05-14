// Work Day Scheduler
//authored by Charissa Hollister 05/10/2022
//**************************** */


//---------Global variables-----------
//Get the current date and time with Moment.js 
const todayDate = moment().format("dddd MMM Do YYYY"); //current date
var dateUsed;                                   //date in local storage
var setDate = localStorage.getItem("dateUsed"); //date to use
if (setDate) {
    dateUsed = JSON.parse(setDate);
  } else {
    dateUsed = todayDate;
  }

  //const hoursArray;
//console.log(hoursArray)

// task object array
//var todayTasks;
    // var todayTasks = localStorage.getItem("tasksUsed"); //date to use
    // if (tasksUsed) {
    //     tasksUsed = JSON.parse(todayTasks);
    //   } else {
    //     tasksUsed = todayTasks;
    //   }
    // const hours = [
    //     {
    //     hour1: "9am",
    //     hour2: "10am",
    //     hour3: "11am",
    //     hour4: "12pm",
    //     hour5: "1pm",
    //     hour6: "2pm",
    //     hour7: "3pm",
    //     hour8: "4pm",
        
    //     }
    //   ]



var currentHour = moment().hour()
var hourBlock = []

var tasksUsed = ["blah blah", "beep beep"]

//-----------Get references from HTML------------
// 9-17


function timeBlockCreation(){
    var dateBlock = document.querySelector("#currentDay");
    dateBlock.textContent = dateUsed;
    localStorage.setItem("dateUsed", JSON.stringify(dateUsed));
}
timeBlockCreation();

function relativeTime(){
for(var i=9; i < 18 ; i++){
        if(currentHour < i){
            var sectionNow = document.querySelector(".hour1")
        $(sectionNow).addClass("past")}
    else if(currentHour == i){$(sectionNow).addClass("present")}
    else {$(sectionNow).addClass("future")}
}

}
relativeTime();





//-----------Code------------





//---------define functions---------


//function to clear local storage
// function clearSchedule() {
//     localStorage.clear();
//     location.reload();
//   }

//if nothing in localStorage, create a new object to track all task status arrays


//-------create elements------------
//create header row 
//create paragraph row 
//create row for current date 
//clear schedule button 
// Create TimeBlocks in grid format
////add in to warn that local storage will clear if todayDate isn't setDate
// function hourBlockCreation(){
//     var hourBlock = document.querySelector("#firstHour");
//     hourBlock.textContent = tasksUsed[0];
//    // localStorage.setItem("tasksUsed[0]", JSON.stringify(tasksUsed[0]));
// }

    //create rows for each hour Block 9 to 5 with margins left and right
        //col 1 hour block -1 column
        //col 2 event info -10 columns
        //col 3 save block -1 column

//---------Date Input--------------
//get date from local storage
    //if date empty in local storage put in today's date
    
    //if date is today continue
    //if date in ls is the past ask user if they would like to 
    //clear ls and continue with today OR keep old date and tasks

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
// var clearButton = document.querySelector(".xxx")
// clearButton.addEventListener("click", clearSchedule);


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



