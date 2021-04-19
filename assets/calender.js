
var addToForm = document.getElementById('am-input');
var saveInputEl = document.getElementById('input');
var saveBtnEl = document.getElementById('amSaveBtn');



// show current date
var currentDate = document.querySelector("#todays-date");
currentDate.textContent = moment().format("dddd, Do MMMM");

saveBtnEl.addEventListener('click', function(event) {
    // event.preventDefault();
    var tasks = saveInputEl.value
    if(!tasks) {
        alert("Please enter text to save to your journal");
        return false;
    } else {
        localStorage.setItem('userInput', tasks);
    }
   

    // var showTasks = localStorage.getItem("userInput");
    console.log(typeof tasks); 

    
});


// function to allow saved events to persist
var returnText = function() {
    var returnTask = localStorage.getItem('userInput');
    console.log(typeof returnTask);
    saveInputEl.textContent = returnTask;
};
returnText()

function timeCoding(){
    //moment function to create time association for each hour
    
    for (i = 9; i < 18; i++){
       
        if (moment().format("H:MM") > i){
            $(`#${i}`).addClass("past");
        } else if (moment().format("H:MM") < i){
            $(`#${i}`).addClass("future");
        } else{
            $(`#${i}`).addClass("present");
        };
         
        $(`#${i}`)
            .val(localStorage.getItem(i));
    }      
};

//change span to input on click to allow text 
//on blur change back to span

// $(".saveBtn").on("click", function(){
//     var task = $(this)
//         .siblings(".description")
//         .val();

//     console.log(task);
//     //create another for parent element to grab id. pass function to save to local storage on click
//     var save = $(this)
//         .siblings(".description")
//         .attr("id")
//     console.log(save);

//     localStorage.setItem(save, task);
    
// });








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