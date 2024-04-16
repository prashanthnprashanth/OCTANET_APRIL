function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    
    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var taskText = taskInput.value;
    taskInput.value = "";

    var li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = <input type="checkbox" onchange="toggleTaskCompletion(this)"> ${taskText} <button onclick="deleteTask(this)">Delete</button>;
    
    taskList.appendChild(li);
}

function toggleTaskCompletion(checkbox) {
    var taskItem = checkbox.parentElement;
    taskItem.classList.toggle("completed");
}

function deleteTask(button) {
    var taskItem = button.parentElement;
    taskItem.remove();
}