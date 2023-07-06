//document.getElementById("myName").innerHTML ="Sheldon";
//document.getElementById("aboutMe").innerHTML ="<strong>I'm learning to build dynamic web pages with JavaScript and HTML</strong><hr>";
var item1;
var item2;
var item3;
document.getElementById("changeList").onclick = newList;
function newList() {
    item1 = prompt("Enter a new first thing: ");
    item2 = prompt("Enter a new second thing: ");
    item3 = prompt("Enter a new third thing: ");
    updateList();
}

function updateList() {
    document.getElementById("firstThing").innerHTML = item1;
    document.getElementById("secondThing").innerHTML = item2;
    document.getElementById("thirdThing").innerHTML = item3;
}