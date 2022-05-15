# Work-Day-Scheduler

Authored by Charissa Hollister 05/10/2022

## Description
An interactive webpage that allows the user to stay organized for the work day. Users will be given 
a schedule for 9AM to 5PM with the opportunity to enter in tasks or events within one or multiple hour blocks
and save these entries. If an error is made or an event changes, the user can simply click the task/event block they
wish to modify and type in the new wording and click Save to overwrite the previous task/event details.
The current hour will have highlighting to help users stay on track with what is past or coming. 
Tasks/events entered in will be maintained so the user is free to leave the webpage and return when they 
are ready to evaluate their schedule again. If the user is no longer pleased with the events listed or simply wants to 
start afresh, then there is a clear schedule option available to create the desired clean slate. <br />

## HTML, CSS, Script Features
Upon opening the page will be clear of any events; once a schedule is started the saved events 
will be displayed until they are changed and saved or schedule is manually cleared<br />
Page can be closed and reopened without losing the current schedule<br />
Hour Blocks are displayed for a 9-5 workday<br />
Tasks or Events can be typed into each hour block by the user<br />
Hour Blocks change colors to represent current time, past, and future<br />
Save buttons are present to move event details into local storage to retrieve later<br />
Date located in the header is today's date- Displays day of the week, month, day, and year<br />
Clear schedule button to allow the local storage to be emptied and get a fresh schedule;
Clear Schedule will prompt for confirmation to ensure it isn't accidentally clicked<br />



## Website Access
### URL Live Webpage: 
https://charissahollister.github.io/Work-Day-Scheduler/
### GitHub Repo:
https://github.com/CharissaHollister/Work-Day-Scheduler

![ScreenShot](./assets/images/ScreenshotWebPage.jpg)


## Future improvement opportunities
Save date to local storage and ask user if they would like to keep or clear schedule if it's a new day<br />
Add ability to choose hours to represent your workday<br />
Change font color and center and border when entering in event details<br />
Add word wrap and inputBox adjust to fit content to allow longer events<br />
Allow to do previous day and next day also<br />
Allow for user picked color pallette<br />


### Minimum customer criteria
AS AN employee with a busy schedule<br />
I WANT to add important events to a daily planner<br />
SO THAT I can manage my time effectively<br />
GIVEN I am using a daily planner to create a schedule<br />
WHEN I open the planner<br />
THEN the current day is displayed at the top of the calendar<br />
WHEN I scroll down<br />
THEN I am presented with time blocks for standard business hours<br />
WHEN I view the time blocks for that day<br />
THEN each time block is color-coded to indicate whether it is in the past, present, or future<br />
WHEN I click into a time block<br />
THEN I can enter an event<br />
WHEN I click the save button for that time block<br />
THEN the text for that event is saved in local storage<br />
WHEN I refresh the page<br />
THEN the saved events persist<br />


In order to succeed in this Challenge, you will apply the following skills:<br />
Implement third-party libraries such as Bootstrap, jQuery, and Moment.js<br />
Perform DOM traversals and manipulations with jQuery<br />
Use jQuery to save user input in local storage<br />
Work with the Bootstrap grid layout in HTML<br />
Work with Bootstrap components<br />
Add custom color styles to an existing CSS framework<br />
Work with custom fonts and icons via a content delivery network (CDN)<br />
