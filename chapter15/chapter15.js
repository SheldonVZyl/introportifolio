var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");
var thingToDo = document.getElementById("thingToDo")
// add a listener to the whattodo button

todoButton.addEventListener("click", displayActivity);
// create a new Date object

var d = new Date();
d.setDate(5);
// call the displayDate() function
displayDate();

function displayDate() {
    // todo: display the current date in the todaysdate div
    todayDate.innerHTML = d.toDateString
}
// todo: set a variable, called youShould, with a different string based on what day of the week it is. */
function displayActivity() {
    // todo: find out the day of the week/*
    var day = d.getDay();
    var youShould;
    switch (day) {
        case 0:
            youShould = "Prepare for the week";
            break;
        case 1:
            youShould = "Go to school"
            break;
        case 2:
            youShould = "Go to the movies"
            break;
        case 3:
            youShould = "Work around the house"
            break;
        case 4:
            youShould = "Clean the house"
            break;
        case 5:
            youShould = "Get ready fot the weekend"
            break;
        case 6:
            youShould = "Chill relax its a off day"
            break;
        default: youShould = "Don't know this day";
            break;


    }

    // todo: output the value of youShould into the thingToDo div
    document.getElementById("thingToDo").innerHTML =
        youShould;
}
