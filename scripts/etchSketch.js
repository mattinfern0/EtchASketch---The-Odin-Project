// Need to eventually learn how to avoid global variables
var currentBoard = {
    rows: 16,
    cols: 16,
    resize: function(newRows, newCols){
        this.rows = newRows;
        this.cols = newCols;
    }
};

function toPixelStr(num){
    var result = num.toString() + "px";
    return result;
}

function createBoardDisplay(){
    var CELLBORDERPX = 1;
    
    var boardContainer = document.getElementById("board-container");
    var cellWidth = ((boardContainer.offsetWidth) / currentBoard.cols) - (2 * CELLBORDERPX);
    var cellHeight = ((boardContainer.offsetHeight) / currentBoard.rows) - (2 * CELLBORDERPX);
    for (var r = 0; r <currentBoard.rows; r++){
        var row = document.createElement("div");
        row.className = "board-row";
        row.style.height = toPixelStr(cellHeight);
        row.style.width = toPixelStr((cellWidth * currentBoard.cols)) + (2 * CELLBORDERPX);
        for (var c = 0; c < currentBoard.cols; c++){
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
    createBoardDisplay();
}

function onResize(){
    removeBoard();
    var newDimension = prompt("Enter new size for board square (ex: 16 for 16x16 board)");
    currentBoard.resize(newDimension, newDimension);
    createBoardDisplay();
}

function setupButtons(){
    var clearButton = document.getElementById("clear-button");
    clearButton.addEventListener('click', onClear)

    var resizeButton = document.getElementById("resize-button");
    resizeButton.addEventListener('click', onResize);
}

function setup(){
    createBoardDisplay();
    setupButtons();
}

setup();