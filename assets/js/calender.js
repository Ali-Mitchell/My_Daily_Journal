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
                    localStorage.setItem('AM', tasksAm);
                }
            });


            // function to allow saved events to persist
            var returnText = function() {
                var returnTask = localStorage.getItem('AM');
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

        } else if (moment().format("H") >=17){
            $(`.work`).addClass("past");
        } else if (moment().format("H") < 9){
            $(`.work`).addClass("future");
        }
    };

timeCodingWork();  

function timeCodingPM(){
    //     if (moment().format("H") > 17 && moment().format("H") < 22) {
    //         $(`.pm`).addClass("present");
    //     }    
    // };
    if (moment().format("H") >= 17 && moment().format("H") < 20) {
        $(`.pm`).addClass("present");

    }
};

timeCodingPM();





