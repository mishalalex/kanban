const boardContainer = document.querySelector(".container");
const firstBoard = document.querySelector(".container").firstElementChild.lastElementChild;

const boardTitles = document.querySelectorAll(".board-title");
const deleteBoardButtons = document.querySelectorAll('.delete-board-btn');
const boardBodies = document.querySelectorAll(".board-body");

const addTask = document.querySelector("#add-task-btn");
const addBoardButton = document.querySelector("#add-board-btn");

const task = document.querySelector(".board-item");


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

function deleteBoard(element) {
    if (element) {
        element.addEventListener("click", () => {
            if (confirm("Are you sure you want to remove this board?")) {
                element.parentElement.parentElement.remove();
            }
        })
    }
}

function deleteTask(element) {
    if (element) {
        element.addEventListener("click", () => {
            if (confirm("Are you sure you want to remove this board?")) {
                element.parentElement.remove();
            }
        })
    }
}

boardBodies.forEach(dragOver)
boardTitles.forEach(changeBoardTitle)
deleteBoardButtons.forEach(deleteBoard)

addBoardButton.addEventListener("click", () => {
    const input = prompt("Enter the board name");
    if (!input) return;
    const newBoard = document.createElement("div");
    const newBoardHead = document.createElement("div");
    const newBoardBody = document.createElement("div");

    newBoard.classList.add("board")
    newBoardHead.classList.add("board-head");
    newBoardBody.classList.add("board-body");

    const boardTitle = document.createElement("h2");
    boardTitle.classList.add("board-title");
    boardTitle.textContent = input;

    const deleteBoardButton = document.createElement("p");
    deleteBoardButton.classList.add("delete-board-btn");
    deleteBoardButton.textContent = "❌";

    newBoardHead.appendChild(boardTitle);
    newBoardHead.appendChild(deleteBoardButton);

    newBoard.appendChild(newBoardHead);
    newBoard.appendChild(newBoardBody);
    boardContainer.insertBefore(newBoard, addBoardButton);

    dragOver(newBoardBody);
    changeBoardTitle(boardTitle);
    deleteBoard(deleteBoardButton);
})

// add new task to the first board
addTask.addEventListener("click", () => {
    const input = prompt("Enter a task");
    if (!input) return;
    const task = document.createElement('div');
    const taskName = document.createElement('h4');
    const deleteItem = document.createElement('p');

    taskName.textContent = input;
    deleteItem.textContent = "❌";

    task.classList.add("board-item");
    task.setAttribute("draggable", true);

    task.addEventListener("dragstart", () => {
        task.classList.add("flying");
    })

    task.addEventListener("dragend", () => {
        task.classList.remove("flying");
    })

    task.addEventListener("click", () => {
        const input = prompt("Enter updated name to this task");
        if (!input) return;
        taskName.textContent = input;
    })

    task.appendChild(taskName);
    task.appendChild(deleteItem);

    firstBoard.appendChild(task);
})


