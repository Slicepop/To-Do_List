
function toggleSidebar() {
    var card = document.querySelector('.card');
    card.classList.toggle('show-sidebar');
  }
var colorSelect = document.getElementById("taskColorSelect");
var selectedOption = document.querySelector(".fa-bookmark");
function changeColor(){
const colorValue = colorSelect.value;

switch (colorValue) {
    case "red":
        selectedOption.style.color = "red";
    break;
    case "orange":
        selectedOption.style.color = "orange";
    break;
    case "yellow":
        selectedOption.style.color = "yellow";
    break;
    case "green":
            selectedOption.style.color = "green";
    break;
    case "blue":
        selectedOption.style.color = "blue";
    break;
    case "purple":
        selectedOption.style.color = "purple";
    break;
    case "Black":
        selectedOption.style.color = "black";
    break;
    default:
        selectedOption.style.color = "black";
    break;
}
}
colorSelect.addEventListener("change", function() {
    changeColor();
});

var Tasks = [];

class Task {
  constructor(taskTitle, taskNotes, taskColor) {
    this.taskTitle = taskTitle;
    this.taskNotes = taskNotes;
    this.taskColor = taskColor;
  }
}
function addTask() {
    var colorSelect = document.getElementById("taskColorSelect");
    var taskNotesInput = document.querySelector(".taskDescriptionTa");
    var taskTitleInput = document.querySelector(".taskTitleInput");
  
    var taskTitle = taskTitleInput.value;
    var taskNotes = taskNotesInput.value;
    var taskColor = colorSelect.value;
  
    var taskObject = new Task(taskTitle, taskNotes, taskColor);
    Tasks.push(taskObject);
  
    console.log(taskObject.taskTitle);
    console.log(Tasks);
  
    // Reset input field values
    taskTitleInput.value = "";
    taskNotesInput.value = "";
    colorSelect.selectedIndex = 0; // Reset to the first option
    changeColor();
  }
  
