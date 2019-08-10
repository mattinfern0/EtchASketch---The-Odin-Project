function toPixelStr(num){
    var result = num.toString() + "px";
    return result;
}

function createBoard(rows, cols){
    var boardContainer = document.getElementById("board-container");
    var CELLBORDERPX = 1;
    var cellWidth = ((boardContainer.offsetWidth) / cols) - (2 * CELLBORDERPX);
    var cellHeight = ((boardContainer.offsetHeight) / rows) - (2 * CELLBORDERPX);
    for (var r = 0; r < rows; r++){
        var row = document.createElement("div");
        row.className = "board-row";
        row.style.height = toPixelStr(cellHeight);
        row.style.width = toPixelStr((cellWidth * cols)) + (2 * CELLBORDERPX);
        for (var c = 0; c < cols; c++){
            var cell = document.createElement("div");
            cell.className = "board-cell";

            cell.addEventListener("mouseover", fillBlock);
            cell.style.height = toPixelStr(cellHeight);
            cell.style.width = toPixelStr(cellWidth);
            cell.style.borderWidth = toPixelStr(CELLBORDERPX);
            cell.style.borderStyle = "solid";
            cell.style.borderColor = "black";

            row.appendChild(cell);
        }
        boardContainer.appendChild(row);
    }
}

function removeBoard(){
    var boardContainer = document.getElementById("board-container");
    var rows = document.querySelectorAll(".board-row");
    rows.forEach(
        function(r){
            boardContainer.removeChild(r);
        })
}

function fillBlock(e){
    this.classList.add("drawn-on");
}

function onClear(){
    removeBoard();
    var newDimension = prompt("Enter new size for square");
    createBoard(newDimension, newDimension);
}

function setupButtons(){
    var clearButton = document.getElementById("clearButton");
    clearButton.addEventListener('click', onClear)
}

function setup(){
    createBoard(16, 16);
    setupButtons();
}



setup();