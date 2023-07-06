
//todo: Create three global variables:
var trainspeed = 250;
var trainPosition = 0;
var animation

//todo: Listen for click events on the train element and
//call a function named speedUp when they happen.
var train = document.getElementById("train");
train.addEventListener("click", speedUp);

//todo: Listen for click events on the stop button element
var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);


//and call a function called stopTrain when they happen.
var stopButton = document.getElementById("train");
train.addEventListener("click", stopTrain);



function speedUp() {
    //todo: Check whether the train is already going as fast as it can. If not, increase the speed.
    if (trainspeed > 10) {
        trainspeed -= 10;
    }
}



//If the train is already moving, stop it and then restart with the new speed by calling a 
var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

//function called frame.
function frame() {
    trainPosition += 2;
    train.style.left = trainPosition + 'px';
    checkPosition(trainPosition);
}

//todo: Reposition the train and check whether the train is crashed.
clearInterval(animation);
animation = setInterval(frame, trainspeed);


function stopTrain() {

    //todo: Test whether the train is already crashed. If not, stop the train.
    var stopButton = document.getElementById("stopButton");
    stopButton.addEventListener("click", stopTrain);
}




//todo: Check the train's current position and crash it if it's at the end of the line.
function checkPosition(currentPosition) {
    if (currentPosition === 260) {
        alert("Crash!");
        console.log("Crash!");
        clearInterval(animation);
    }
}
