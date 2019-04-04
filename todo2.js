const toDoForm = document.querySelector(".js-todoForm");
const toDoInput = toDoForm.querySelector("input");


const toDoList = document.querySelector(".js-todoList");
const TODOS = "todos";

function writeToDo(currentValue) {
    const toDoContent = document.createElement('li');
    toDoContent.innerText = currentValue;
    toDoList.appendChild(toDoContent);


}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    writeToDo(currentValue);
    

}

function askForToDo() {
    toDoForm.addEventListener("submit", handleSubmit);
}


function loadToDo() {
    const loadedToDo = localStorage.getItem(TODOS);
    if (loadedToDo === null) {
        askForToDo();

    } else {

    }

}

function init() {
    loadToDo();

}

init();