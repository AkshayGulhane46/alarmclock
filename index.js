let minutes;
let hour;
let seconds;
let timeofday;

var inputminutes = 0;
var inputhours  = 0;
var inputseconds= 0;

var alarms = [];
var alarm;



window.onload = function(){
    const timeID = setInterval(timeAndDate, alarmRing  ,1000);
    function timeAndDate() {
        const Masterdate = new Date();
        hour = Masterdate.getHours();
        minutes = Masterdate.getMinutes();
        seconds = Masterdate.getSeconds ();
        timeofday = hour >= 12 ? 'PM' : 'AM'; // if greater then 12 then PM or else AM
        hour = hour % 12; // find current AM PM
        hour = hour ? hour : 12; // show 00 as 12 
        minutes = minutes < 10 ? '0' + minutes : minutes;

        document.getElementById("Hour").innerHTML = hour;
        document.getElementById("Minute").innerHTML = minutes;
        document.getElementById("Second").innerHTML = seconds;
        document.getElementById("timeofday").innerHTML = timeofday;
        alarmRing();
        alarm = hour + ":"+ minutes + ":"+ seconds +":" + timeofday;

    }

    function alarmRing(){
        if(inputhours == hour && inputminutes == minutes && inputseconds == seconds){
            window.alert("Alarm Ring")
        }
    }

};

function setAlarm(){

  

    let list = document.getElementById("myList");
    inputminutes = document.getElementById("Minute-input").value;
    inputhours =  document.getElementById("Hour-input").value;
    inputseconds = document.getElementById("Second-input").value;
    inputtimeofday = document.getElementById("timeofday-input").value;

    if(inputminutes > 60 || inputminutes < 0 || 
        inputhours < 0|| inputhours > 12 || 
        inputseconds < 0 || inputseconds > 60
        ){
         window.alert("add Correct time please")
         return
    }




    const alarm = inputhours + ":"+ inputminutes + ":"+ inputseconds +":"+inputtimeofday;
    if(!alarms.includes(alarm)){
         alarms.push(alarm );
         let li = document.createElement("li");
         li.className = alarm;
         var deleteBtn = document.createElement("button");
         deleteBtn.innerText = "delete";
         deleteBtn.className = "delete";
         li.innerText = alarm;
        list.appendChild(li);
        li.appendChild(deleteBtn);

    }else{
        console.log("alrady in alarms")
    }

    var closebtns = document.getElementsByClassName("delete");
    var i;
    for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function() {
    const value = this.parentElement.className;
    console.log("Delete is prssed for" + value);

    if(alarms.includes(value)){
        const index = alarms.indexOf(value);
        alarms.splice(index, 1);
         inputminutes = 0;
         inputhours  = 0;
         inputseconds= 0;
     }

    this.parentElement.style.display = 'none';
  });
}
}

function showList(){
    for(var i = 0 ; i < alarms.length ; i++){
        console.log(alarms[i]);
    }
}






