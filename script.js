const boardContainer = document.querySelector(".container");
const firstBoard = document.querySelector(".container").firstElementChild;
const board = document.querySelectorAll(".board");
const boardTitle = document.querySelectorAll(".board-title");
const addTask = document.querySelector("#add-task-btn");
const addBoard = document.querySelector("#add-board-btn");
const task = document.querySelector(".item");


function dragOver(element) {
    element.addEventListener("dragover", (e) => {
        e.preventDefault();
        const elementComingAbove = document.querySelector(".flying");
        elementComingAbove.addEventListener("dragend", () => {
            element.appendChild(elementComingAbove);
        })
    })
}

function changeBoardTitle(element) {
    if (element) {
        element.addEventListener("click", () => {
            const input = prompt("Enter updated name to this board");
            if (!input) return;
            element.textContent = input;
        })
    }
}

board.forEach(dragOver)
boardTitle.forEach(changeBoardTitle)

addBoard.addEventListener("click", () => {
    const input = prompt("Enter the board name");
    if (!input) return;
    const newBoard = document.createElement("div");
    newBoard.classList.add("board")
    const hTwoElement = document.createElement("h2");
    hTwoElement.classList.add("board-title");
    hTwoElement.textContent = input;
    newBoard.appendChild(hTwoElement);
    boardContainer.insertBefore(newBoard, addBoard);
    dragOver(newBoard);
    changeBoardTitle(hTwoElement);
})

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

    newTask.addEventListener("click", () => {
        const input = prompt("Enter updated name to this task");
        if (!input) return;
        newTask.textContent = input;
    })

    if (firstBoard) {
        firstBoard.appendChild(newTask);
    }
})
