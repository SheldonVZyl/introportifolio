/*document.getElementById("lefteye").style.backgroundColor =
    "purple";
// document.getElementById("head").style.transform =
//"rotate(15deg)";
document.getElementById("body").style.border = "2px black solid";
document.getElementById("mouth").style.borderRadius = "4px";
document.getElementById("righteye").style.border =
    "4px yellow dotted";
document.getElementById("leftarm").style.backgroundColor =
    "#FF00FF";
document.getElementById("body").style.color = "#FF0000";
document.getElementById("head").style.borderTop =
    "5px black solid";
document.getElementById("head").style.transform =
    "rotate(-15deg)";
document.getElementById("nose").style.borderRadius = "80%";
document.getElementById("rightarm").style.backgroundColor="green";
document.getElementById("mouth").style.backgroundColor="pink";*/


var rightEye = document.getElementById("righteye");
var leftEye = document.getElementById("lefteye");
leftEye.addEventListener("click", moveUpDown);
rightEye.addEventListener("click", moveUpDown);
var leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", moveRightLeft);
var nose = document.getElementById("nose");
nose.addEventListener("click", moveUpDown);
var rightArm=document.getElementById("rightarm");
rightArm.addEventListener("click", moveRightLeft);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;
    var animation = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(animation);
        }
    }
}
function moveRightLeft(e) {
    var robotPart = e.target;
    var lft = 0;
    var animation = setInterval(frame, 10)//draw every10ms
    function frame() {
        robotPart.style.left = lft + '%';
        lft++;
        if (lft === 70) {
            clearInterval(animation);
        }
    }
}
function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;
    var animation = setInterval(frame, 10)// draw every 10ms
    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 50) {
            clearInterval(animation);
        }
    }
}

