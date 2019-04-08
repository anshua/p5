// Minessweeper

function make2dArray(cols, rows) {
	var arr = new Array(cols);
	for(var i = 0; i < cols; i++){
		arr[i] = new Array(rows);
	}
	return arr;
}

var grid;
var cols;
var rows;
var w = 20;
var totalBees = 10;

function setup() {
	createCanvas(201, 201);
	cols = floor(width/w);
	rows = floor(height/w);
	grid = make2dArray(cols, rows);
	for(var i = 0; i < cols; i++){
		for(var j = 0; j < rows; j++){
			grid[i][j] = new Cell(i, j, w);
		}
	}

	// Pick totalBees spots
	for(var n = 0; n < totalBees; n++){
		var i = floor(random(cols));
		var j = floor(random(rows));
		while(grid[i][j].bee == true){
			i = floor(random(cols));
			j = floor(random(rows));
		}
		grid[i][j].bee = true;
	}

	for(var i = 0; i < cols; i++){
		for(var j = 0; j < rows; j++){
			grid[i][j].countBees();
		}
	}

}

function draw() {
	background(197);
	for(var i = 0; i < cols; i++){
		for(var j = 0; j < rows; j++){
			grid[i][j].show();
		}
	}
}

function gameOver() {
	for(var i = 0; i < cols; i++){
		for(var j = 0; j < rows; j++){
			grid[i][j].revealed = true;
		}
	}
}

function mousePressed() {
	for(var i = 0; i < cols; i++){
		for(var j = 0; j < rows; j++){
			if(grid[i][j].contains(mouseX, mouseY)){
				grid[i][j].reveal();

				if(grid[i][j].bee){
					gameOver();
				}
			}
		}
	}
}