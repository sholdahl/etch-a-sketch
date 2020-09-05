let container = document.querySelector(".my-container");
let resizeBtn = document.querySelector("#resize-btn");
let clearBtn = document.querySelector("#clear-btn");
let grid = document.createElement("div");
let item = document.createElement("div");

grid.classList.add("grid");
item.classList.add("item");

container.appendChild(grid)
for (i = 0; i < 256; i++) {
    grid.appendChild(item.cloneNode(true))
};

const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.classList.toggle("activated")
    });
});

resizeBtn.addEventListener("click",resize);
clearBtn.addEventListener("click",clear);
window.addEventListener("keypress",keyStrokes);

function resize() {
    let size = window.prompt("Please enter the new grid size. Your input must be a number.");
    if (isNaN(size)) {
        alert("you must input a number to resize the ethch-a-sketch!")
        return;
    } else {
        let oldItems = document.querySelectorAll(".item");
        oldItems.forEach((item) => {
            item.remove()
        });
        numCells = size * size
        item.style.width = "calc(100%/" + size + ")"
        item.style.height = "calc(100%/" + size + ")"
        for (i = 0; i < numCells; i++) {
            grid.appendChild(item.cloneNode(true))
        };
        let newItems = document.querySelectorAll(".item");
        newItems.forEach((item) => {
            item.addEventListener("mouseover", () => {
                item.classList.toggle("activated")
            });
        });
    }
}

function clear() {
    const items = document.querySelectorAll(".item");
    items.forEach((item) => {
        item.classList.remove("activated")
    })
};

function keyStrokes(e) {
    if(e.key == "c" || e.key == "C"){
        clear()
    } else if(e.key == "r" || e.key == "R"){
        resize()
    } else {
        return;
    }
}