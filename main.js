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

resizeBtn.addEventListener("click", resize);
clearBtn.addEventListener("click", clear);
window.addEventListener("keypress", keyStrokes);

draw();

function draw() {
    let items = document.querySelectorAll(".item");
    items.forEach((item) => {
        item.addEventListener("mouseover", () => {
            let mode = document.querySelector("#mode");
            let selectedMode = mode.options[mode.selectedIndex].value;
            if (item.style.backgroundColor != "") {
                item.style.backgroundColor = ""
                item.classList.remove("grayscale")
                return;
            } else if (selectedMode == "black") {
                item.style.backgroundColor = `rgb(0, 0, 0)`
            } else if (selectedMode == "crazy") {
                num1 = Math.floor(Math.random() * 256);
                num2 = Math.floor(Math.random() * 256);
                num3 = Math.floor(Math.random() * 256);
                item.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`
            } else if (selectedMode == "grayscale") {
                let grayscaleCount = document.querySelectorAll(".grayscale").length;
                let percentage = Math.max(100 - grayscaleCount * 10, 0);
                item.classList.add("grayscale")
                item.style.backgroundColor = `hsl(0, 0%, ${percentage}%)`
            } else (alert("ERROR"))
        });
    });
}

function resize() {
    let size = window.prompt("Please enter the new grid size. Your input must be a number.");
    if (isNaN(size)) {
        alert("You must input a number to resize the ethch-a-sketch!")
        return;
    } else if(size > 200){
        alert("Pick a smaller number.")
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
        draw();
    }
}

function clear() {
    const items = document.querySelectorAll(".item");
    items.forEach((item) => {
        item.style.backgroundColor = ""
        item.classList.remove("grayscale")
    })
};

function keyStrokes(e) {
    if (e.key == "c" || e.key == "C") {
        clear()
    } else if (e.key == "r" || e.key == "R") {
        resize()
    } else {
        return;
    }
}