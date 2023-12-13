const inputAdd = document.getElementById('input-add')
const btnAdd = document.getElementById('btn-add')
const displayTask = document.querySelector('.display-task')

btnAdd.addEventListener("click", (event) =>{
    event.preventDefault(); // Empêche le comportement par défaut du clic 
    let task = inputAdd.value
    let taskList = document.createElement("ul")
    let tasks = document.createElement("li")
    if (task != " ") {
        tasks.innerHTML =`<input type="checkbox">
                          ${task}
                           <div>
                           <button>Edit</button> 
                           <button>Deleted</button>
                           </div> ` 
        taskList.appendChild(tasks)
        displayTask.appendChild(taskList)
    }
    inputAdd.value = " "
})