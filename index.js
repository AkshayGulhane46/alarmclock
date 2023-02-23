let minutes;
let hour;
let seconds;
let timeofday;

var inputminutes = 0;
var inputhours = 0;
var inputseconds = 0;

var alarms = []; // storing alarms in array 
var alarm = 0;

window.onload = function() {
    const timeID = setInterval(timeAndDate, 1000); // every second time and Date will be called
    function timeAndDate() {
        const Masterdate = new Date();
        hour = Masterdate.getHours();
        minutes = Masterdate.getMinutes();
        seconds = Masterdate.getSeconds();
        // To show time in 12 hour format 
        timeofday = hour >= 12 ? 'PM' : 'AM'; // if greater then 12 then PM or else AM
        hour = hour % 12; // find current AM PM
        hour = hour ? hour : 12; // show 00 as 12 
        minutes = minutes < 10 ? '0' + minutes : minutes;
        // Set the time in respecitve divs 
        const currentTime = hour + ":" + minutes + ":" + seconds + ":" + timeofday
        document.getElementById("TIME").innerHTML = currentTime;
        if (alarms.includes(currentTime)) { // Check if current time mateches with any of the alarm set 
            alarmRing(); // if yes then call the alarm ring function 
        }
    }

    function alarmRing() {
        window.alert("Alarm Ring")
    }
};

function setAlarm() {
    let list = document.getElementById("alarms-list-ul");
    inputminutes = document.getElementById("Minute-input").value;
    inputhours = document.getElementById("Hour-input").value;
    inputseconds = document.getElementById("Second-input").value;
    inputtimeofday = document.getElementById("timeofday-input").value;

    // input forms validations 

    if (inputminutes > 60 || inputminutes < 0 ||
        inputhours < 0 || inputhours > 12 ||
        inputseconds < 0 || inputseconds > 60
    ) {
        window.alert("Enter Correct time please")
        return
    }

    // elemtnt to be created for alarm inputs
    const alarm = inputhours + ":" + inputminutes + ":" + inputseconds + ":" + inputtimeofday;

    if (!alarms.includes(alarm)) { // Check if the same alarm is present or not 
        alarms.push(alarm); // if not then push the alarm in array 
        let li = document.createElement("li"); // Create a List Item in the alarm list
        li.className = alarm;
        li.id = "alarm"; // Set ID for list item for styling 
        var deleteBtn = document.createElement("button");
        deleteBtn.className = "Delete"; // Set ClasssName for delete button for styling 

        li.innerText = alarm; // set inner text same as alarm time 
        list.appendChild(li); // add the list item in our unordered list
        li.appendChild(deleteBtn); // add the delete button on list item 

        var TrashIcon = document.createElement("i"); // trash can icon from font awsome 
        TrashIcon.className = "fa-solid fa-trash";
        deleteBtn.appendChild(TrashIcon); // add the icon to the delete button as child 

    } else {
        window.alert("You already have same alarm set for " + alarm); // if user tries to add same alarm then show alert

    }

    var deletebtns = document.getElementsByClassName("Delete"); // count the number of delete buttons on page
    var i;
    for (i = 0; i < deletebtns.length; i++) {
        deletebtns[i].addEventListener("click", function() {
            const value = this.parentElement.className; // value is taken from each delete button className 
            //console.log("Delete is Pressed for " + value); 

            if (alarms.includes(value)) { // if array contains the alarm 
                const index = alarms.indexOf(value);
                alarms.splice(index, 1); // delte the alarm from alarms array 
            }
            this.parentElement.style.display = 'none'; // remove element form DOM 
        });
    }
}

for (var i = 0; i < alarms.length; i++) {
    console.log(alarms[i]);
}