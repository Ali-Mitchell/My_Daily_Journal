
var addToForm = document.getElementById('am-input');
var saveInput = document.getElementById('input');
var saveBtn = document.getElementById('am-btn');

savebtn.addEventListener('click', function(event) {
    event.preventDefault();
    addToForm.textContent = saveInput.value;
    localStorage.setItem('saveInput.value');
});



// var saveInput = function(event) {
//     //Why do we have to do this?
//     event.preventDefault();
//     // only run if the submit button is being clicked
//     var targetEl = event.target;
//     if(targetEl.matches("#am-submit")) {
//         // get the initial entry form element
//         var amInputEl = document.querySelector("#am-input");
//         var amUserInput = amInputEl.value
//         // ensure that text has been entered 
//         if(!amUserInputEl) {
//             alert("Please enter text to save to your journal");
//             return false;
//         // save user input and store to localStorage
//         } else {
//             var dailyObj = {
//                 initials: userInitials,
//                 score: totalScore
//             };
//             // send obj to highScores array
//             dailyTasks.push(dailyObj);

//             console.log(dailyObj);
//             console.log(highScores);

//             // save highScores array to local storage/ and convert the score into a string use json for javascript object notation*
//             localStorage.setItem("tasks", JSON.stringify(dailyTasks));
//         }
//     }
// };




// variable for events to be stored, pull from localStorage, set to empty array if falsy
var events = JSON.parse(localStorage.getItem("events")) || [];

// function to pull from localStorage
var loadEvents = function() {
    // set events object as pulled from localStorage
    events = JSON.parse(localStorage.getItem("events"));
    
};


// // function to push description to array upon save button click
// $(".saveBtn").on("click", function () {
//     // get the eventID of the button clicked
//     var eventId = $(this).attr("hour-block");
//     // use the eventID to get the hour
//     var formId = $(eventId);
//     console.log(formId);
// });