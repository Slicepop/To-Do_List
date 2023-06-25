
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
var taskTitle;
var taskNotes;
var taskColor;
function
 addTask() {
    

    var colorSelect = document.getElementById("taskColorSelect");
    var taskNotesInput = document.querySelector(".taskDescriptionTa");
    var taskTitleInput = document.querySelector(".taskTitleInput");
  
    taskTitle = taskTitleInput.value;
    taskNotes = taskNotesInput.value;
    taskColor = colorSelect.value;
  
    var taskObject = new Task(taskTitle, taskNotes, taskColor);
    Tasks.push(taskObject);
    addTasktoTasks(taskObject);
  
    console.log(taskObject.taskTitle);
    console.log(Tasks);
  
    // Reset input field values
    taskTitleInput.value = "";
    taskNotesInput.value = "";
    colorSelect.selectedIndex = 0; // Reset to the first option
    changeColor();

  }

  var opaque = document.getElementsByClassName("opaque");
function opentask(element) {
    document.querySelector('.openedTasknotes').innerHTML = element.querySelector('.')


    opaque[0].style.zIndex = 3;
    opaque[0].style.transition = 'opacity 1s ease';
    opaque[0].style.height = "100%";
    opaque[0].style.opacity = "1";

}
function closeOpenedTask(){
    opaque[0].style.transition = '1s ease';
    opaque[0].style.zIndex = -1;
    opaque[0].style.height = "0";
    opaque[0].style.opacity = "0";
}

function addTasktoTasks(task){
    document.querySelector('.tasks').innerHTML += 
    '<div class="task" onclick="opentask(this)"><i class="fa-solid fa-bookmark fa-rotate-90 taskBookmark" style="color: '+ task.taskColor +';"></i><div class="taskContents"><p class="taskTitle">'+ task.taskTitle+'</p><p class="taskDots">...</p></div></div>';
}



  
