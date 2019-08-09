function toPixelStr(num){
    return num.toString() + "px";
}

function createBoard(rows, cols){
    var boardContainer = document.getElementById("board-container");
    //console.log("container width: " + boardContainer.style.width);
    var cellWidth = (boardContainer.clientWidth / rows);
    var cellHeight = (boardContainer.clientHeight / cols);
    console.log("cellWidth: " + cellWidth + " cellHeight: " + cellHeight);
    for (var r = 0; r < rows; r++){
        var row = document.createElement("div");
        row.className = "board-row";
        row.style.height = toPixelStr(cellHeight);
        row.style.width = toPixelStr((cellWidth * cols) + 100);
        for (var c = 0; c < cols; c++){
            var cell = document.createElement("div");
            cell.className = "board-cell";
            //cell.innerText = "R" + r.toString() + "-C" + c.toString();
            cell.addEventListener("mouseover", fillBlock);
            cell.style.height = toPixelStr(cellHeight);
            cell.style.width = toPixelStr(cellWidth);
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
    var newHeight = prompt("Enter new board height");
    var newWidth = prompt("Enter new board width");
    createBoard(newHeight, newWidth);
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