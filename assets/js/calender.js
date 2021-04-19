// show current date
var currentDate = document.querySelector("#todays-date");
currentDate.textContent = moment().format("dddd, Do MMMM");

// save Am Time Block
            var saveInputEl = document.getElementById('input-am');
            var saveBtnEl = document.getElementById('saveBtn');

            saveBtnEl.addEventListener('click', function(event) {
                var tasksAm = saveInputEl.value
                if(!tasksAm) {
                    alert("Please enter text to save to your journal");
                    return false;
                } else {
                    localStorage.setItem('AM', tasksAM);
                }
            });


            // function to allow saved events to persist
            var returnText = function() {
                var returnTask = localStorage.getItem('userInput');
                console.log(typeof returnTask);
                saveInputEl.textContent = returnTask;
            };
returnText()

// work Function
            var saveInputElWork = document.getElementById('input-work');
            var saveBtnElWork = document.getElementById('saveBtn2');

            saveBtnElWork.addEventListener('click', function(event) {
                var tasksWork = saveInputElWork.value
                if(!tasksWork) {
                    alert("Please enter text to save to your journal");
                    return false;
                } else {
                    localStorage.setItem('work', tasksWork);
                }
            });

            // function to allow saved events to persist
            var returnTextWork = function() {
                
                var returnTaskWork = localStorage.getItem('work');
                console.log(typeof returnTask);
                saveInputElWork.textContent = returnTaskWork;
            };
            returnTextWork()

// Pm Function
            var saveInputElPM = document.getElementById('input-PM');
            var saveBtnElPM = document.getElementById('saveBtn3');

            saveBtnElPM.addEventListener('click', function(event) {
                var tasksPM = saveInputElPM.value
                if(!tasksPM) {
                    alert("Please enter text to save to your journal");
                    return false;
                } else {
                    localStorage.setItem('pm', tasksPM);
                }
            });

            // function to allow saved events to persist
            var returnTextPM = function() {
                var returnTaskPM = localStorage.getItem('pm');
                saveInputElPM.textContent = returnTaskPM;
            };
            returnTextPM()


//moment function to create time association for each hour
    function timeCodingAM(){
        if (moment().format("H") > 1 && moment().format("H") < 9) {
            $(`.am`).addClass("present");

        } else if (moment().format("H") >= 9){
            $(`.am`).addClass("past");
        } 
    };

timeCodingAM();  

function timeCodingWork(){
    //moment function to create time association for each hour
       
        if (moment().format("H") > 9 && moment().format("H") < 17) {
            $(`.work`).addClass("present");

        } else if (moment().format("H") >= 17){
            $(`.work`).addClass("past");
        } else if (moment().format("H") < 9){
            $(`.work`).addClass("future");
        }
    };

timeCodingWork();  

function timeCodingPM(){
    //moment function to create time association for each hour
       
        if (moment().format("H") > 17 && moment().format("H") < 24) {
            $(`.pm`).addClass("present");

        } else if (moment().format("H") >= 24){
            $(`.pm`).addClass("past");
        } 
         
    };

timeCodingPM();

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