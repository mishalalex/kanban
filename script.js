const addTask = document.querySelector("#add-task-btn");
const todoBoard = document.querySelector("#todo-board");
const board = document.querySelectorAll(".board");

function dragOver(element) {
    element.addEventListener("dragover", () => {
        const elementComingAbove = document.querySelector(".flying");
        elementComingAbove.addEventListener("dragend", () => {
            element.appendChild(elementComingAbove)
        })
    })
}

addTask.addEventListener("click", () => {
    const input = prompt("Enter a task");
    if (!input) return;
    const newTask = document.createElement('p');
    newTask.textContent = input;
    newTask.classList.add("item");
    newTask.setAttribute("draggable", true);
    newTask.addEventListener("dragstart", () => {
        newTask.classList.add("flying");
    })
    newTask.addEventListener("dragend", () => {
        newTask.classList.remove("flying");
    })
    todoBoard.appendChild(newTask);
})

board.forEach(dragOver)